import { Card } from "@/components/ui/card";
import { ConfiguratorState } from "@/pages/ProductConfigurator";
import { useEffect, useRef } from "react";

interface ConfiguratorPreviewProps {
  config: ConfiguratorState;
}

const ConfiguratorPreview = ({ config }: ConfiguratorPreviewProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background
    ctx.fillStyle = "#f8f8f8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Color mapping
    const colorMap: Record<string, string> = {
      gold: "#D4AF37",
      silver: "#C0C0C0",
      black: "#1a1a1a",
      white: "#F5F5DC",
      red: "#8B0000",
      blue: "#1E3A8A",
      green: "#064E3B",
      custom: "#9333EA",
    };

    const productColor = colorMap[config.color] || "#D4AF37";
    const accentColor = config.material === "metallic" ? "#FFD700" : productColor;

    // Draw based on product type
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = config.size === "small" ? 0.7 : config.size === "medium" ? 1 : config.size === "large" ? 1.3 : 1.6;

    switch (config.baseProduct) {
      case "tassel":
        drawTassel(ctx, centerX, centerY, productColor, accentColor, scale, config);
        break;
      case "tieback":
        drawTieback(ctx, centerX, centerY, productColor, accentColor, scale, config);
        break;
      case "fringe":
        drawFringe(ctx, centerX, centerY, productColor, accentColor, scale);
        break;
      case "braid":
        drawBraid(ctx, centerX, centerY, productColor, accentColor, scale);
        break;
      case "cord":
        drawCord(ctx, centerX, centerY, productColor, accentColor, scale);
        break;
    }

    // Add texture overlay for premium materials
    if (config.material === "silk" || config.finishType === "luxury") {
      addTexture(ctx, canvas.width, canvas.height);
    }
  }, [config]);

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-lg font-medium">Live Preview</h2>
          <div className="text-sm text-muted-foreground">
            {config.baseProduct.charAt(0).toUpperCase() + config.baseProduct.slice(1)} • {config.material}
          </div>
        </div>
        
        <div className="aspect-square bg-gradient-to-br from-background to-muted rounded-lg overflow-hidden flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={600}
            height={600}
            className="w-full h-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm">
          <div>
            <p className="text-muted-foreground">Material</p>
            <p className="font-medium">{config.material.charAt(0).toUpperCase() + config.material.slice(1)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Color</p>
            <p className="font-medium">{config.color.charAt(0).toUpperCase() + config.color.slice(1)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Size</p>
            <p className="font-medium">{config.size.charAt(0).toUpperCase() + config.size.slice(1)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Length</p>
            <p className="font-medium">{config.length}"</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Drawing functions
function drawTassel(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, accent: string, scale: number, config: ConfiguratorState) {
  const headRadius = 30 * scale;
  const headHeight = 40 * scale;
  const tasselLength = parseInt(config.length) * 8 * scale;
  
  // Draw hanging cord
  ctx.strokeStyle = accent;
  ctx.lineWidth = 3 * scale;
  ctx.beginPath();
  ctx.moveTo(x, y - headHeight - 60 * scale);
  ctx.lineTo(x, y - headHeight);
  ctx.stroke();

  // Draw head
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x, y - headHeight / 2, headRadius, headHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Add embellishment to head
  if (config.embellishment === "beaded") {
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const bx = x + Math.cos(angle) * headRadius * 0.7;
      const by = y - headHeight / 2 + Math.sin(angle) * headHeight * 0.35;
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(bx, by, 3 * scale, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (config.embellishment === "ornate") {
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.5 * scale;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.arc(x, y - headHeight / 2, headRadius * 0.5 + i * 3 * scale, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // Draw tassel strands
  const strandsCount = 40;
  for (let i = 0; i < strandsCount; i++) {
    const offset = (i - strandsCount / 2) * (3 * scale);
    const strandLength = tasselLength + (Math.random() - 0.5) * 20 * scale;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5 * scale;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.moveTo(x + offset, y);
    ctx.lineTo(x + offset, y + strandLength);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawTieback(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, accent: string, scale: number, config: ConfiguratorState) {
  const ropeThickness = 15 * scale;
  const length = parseInt(config.length) * 10 * scale;
  
  // Draw curved rope
  ctx.strokeStyle = color;
  ctx.lineWidth = ropeThickness;
  ctx.lineCap = "round";
  
  ctx.beginPath();
  ctx.moveTo(x - length / 2, y);
  ctx.quadraticCurveTo(x, y - 80 * scale, x + length / 2, y);
  ctx.stroke();

  // Add twist effect
  if (config.embellishment === "twisted") {
    ctx.strokeStyle = accent;
    ctx.lineWidth = ropeThickness * 0.3;
    for (let i = 0; i < 10; i++) {
      const t = i / 10;
      const px = x - length / 2 + length * t;
      const py = y - 80 * scale * Math.sin(Math.PI * t);
      ctx.beginPath();
      ctx.arc(px, py, ropeThickness * 0.4, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  // Draw tassel ends
  const tasselSize = 25 * scale;
  [-length / 2, length / 2].forEach(xOffset => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + xOffset, y, tasselSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Tassel strands
    for (let i = 0; i < 15; i++) {
      const angle = Math.PI / 2 + (i - 7) * 0.15;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2 * scale;
      ctx.beginPath();
      ctx.moveTo(x + xOffset, y);
      ctx.lineTo(x + xOffset + Math.cos(angle) * 30 * scale, y + Math.sin(angle) * 30 * scale);
      ctx.stroke();
    }
  });
}

function drawFringe(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, accent: string, scale: number) {
  const fringeCount = 30;
  const fringeLength = 80 * scale;
  const spacing = 12 * scale;
  
  // Top band
  ctx.fillStyle = accent;
  ctx.fillRect(x - (fringeCount * spacing) / 2, y - 100 * scale, fringeCount * spacing, 10 * scale);
  
  // Fringe strands
  for (let i = 0; i < fringeCount; i++) {
    const xPos = x - (fringeCount * spacing) / 2 + i * spacing;
    const len = fringeLength + (Math.random() - 0.5) * 20 * scale;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 3 * scale;
    ctx.beginPath();
    ctx.moveTo(xPos, y - 90 * scale);
    ctx.lineTo(xPos, y - 90 * scale + len);
    ctx.stroke();
  }
}

function drawBraid(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, accent: string, scale: number) {
  const width = 30 * scale;
  const segments = 12;
  const segmentHeight = 30 * scale;
  
  for (let i = 0; i < segments; i++) {
    const yPos = y - 180 * scale + i * segmentHeight;
    const offset = i % 2 === 0 ? width / 2 : -width / 2;
    
    ctx.fillStyle = i % 2 === 0 ? color : accent;
    ctx.beginPath();
    ctx.ellipse(x + offset / 2, yPos, width / 2, segmentHeight / 2, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawCord(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, accent: string, scale: number) {
  const thickness = 12 * scale;
  const twists = 8;
  
  for (let i = 0; i < twists; i++) {
    const yPos = y - 200 * scale + i * 40 * scale;
    const xOffset = Math.sin((i / twists) * Math.PI * 4) * 30 * scale;
    
    ctx.strokeStyle = i % 2 === 0 ? color : accent;
    ctx.lineWidth = thickness;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x + xOffset, yPos);
    ctx.lineTo(x + xOffset, yPos + 40 * scale);
    ctx.stroke();
  }
}

function addTexture(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 10 - 5;
    data[i] += noise;
    data[i + 1] += noise;
    data[i + 2] += noise;
  }
  
  ctx.putImageData(imageData, 0, 0);
}

export default ConfiguratorPreview;
