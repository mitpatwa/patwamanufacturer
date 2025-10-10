import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ConfiguratorState } from "@/pages/ProductConfigurator";
import { ShoppingCart, Send, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface ConfiguratorSummaryProps {
  config: ConfiguratorState;
}

const ConfiguratorSummary = ({ config }: ConfiguratorSummaryProps) => {
  const [price, setPrice] = useState({ unitPrice: 0, totalPrice: 0, leadTimeDays: 0 });
  const [warnings, setWarnings] = useState<string[]>([]);

  useEffect(() => {
    // Calculate price based on configuration
    const calculatedPrice = calculatePrice(config);
    setPrice(calculatedPrice);

    // Check for warnings
    const configWarnings = checkWarnings(config);
    setWarnings(configWarnings);
  }, [config]);

  const handleAddToCart = () => {
    toast.success("Configuration added to cart");
  };

  const handleRequestQuote = () => {
    toast.success("Quote request submitted. We'll contact you within 24 hours.");
  };

  const requiresApproval = warnings.length > 0 || config.quantity > 200 || config.embellishment === "ornate";

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <h2 className="font-serif text-lg font-medium mb-4">Summary</h2>
        
        <div className="space-y-4">
          {/* Price Display */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-muted-foreground">Unit Price</span>
              <span className="text-lg font-medium">₹{price.unitPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-muted-foreground">Quantity</span>
              <span className="font-medium">{config.quantity} units</span>
            </div>
            <div className="h-px bg-border my-3" />
            <div className="flex justify-between items-baseline">
              <span className="font-medium">Total Price</span>
              <span className="text-2xl font-serif font-bold">₹{price.totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {/* Lead Time */}
          <div className="bg-muted p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Estimated Lead Time</span>
              <span className="text-sm font-medium">{price.leadTimeDays} days</span>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-2 pt-2">
            <p className="text-sm font-medium">Specifications</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type</span>
                <span className="capitalize">{config.baseProduct}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Material</span>
                <span className="capitalize">{config.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Color</span>
                <span className="capitalize">{config.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Size</span>
                <span className="capitalize">{config.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Embellishment</span>
                <span className="capitalize">{config.embellishment}</span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="pt-2">
            {requiresApproval ? (
              <Badge variant="outline" className="w-full justify-center py-2">
                Requires Approval
              </Badge>
            ) : (
              <Badge className="w-full justify-center py-2 bg-green-600">
                Ready to Order
              </Badge>
            )}
          </div>

          {/* CTAs */}
          <div className="space-y-2 pt-2">
            <Button className="w-full gap-2" size="lg" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" className="w-full gap-2" onClick={handleRequestQuote}>
              <Send className="h-4 w-4" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </Card>

      {/* Warnings & Constraints */}
      {warnings.length > 0 && (
        <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
          <div className="flex gap-2">
            <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-2 flex-1">
              <p className="font-medium text-sm text-orange-900 dark:text-orange-100">Important Notices</p>
              <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                {warnings.map((warning, idx) => (
                  <li key={idx}>• {warning}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}

      {/* Benefits */}
      <Card className="p-4 bg-muted">
        <p className="text-sm font-medium mb-2">Why Patwa?</p>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>✓ Handcrafted with 35+ years expertise</li>
          <li>✓ Premium materials and durable finish</li>
          <li>✓ Custom color matching available</li>
          <li>✓ Trade pricing for bulk orders</li>
        </ul>
      </Card>
    </div>
  );
};

// Price calculation logic
function calculatePrice(config: ConfiguratorState): { unitPrice: number; totalPrice: number; leadTimeDays: number } {
  let basePrice = 150; // Base price in INR

  // Product type multiplier
  const productMultiplier: Record<string, number> = {
    tassel: 1.0,
    tieback: 1.2,
    fringe: 0.8,
    braid: 0.9,
    cord: 0.7,
  };
  basePrice *= productMultiplier[config.baseProduct] || 1;

  // Material multiplier
  const materialMultiplier: Record<string, number> = {
    silk: 1.5,
    cotton: 1.0,
    metallic: 1.8,
    mixed: 1.3,
    wool: 1.2,
  };
  basePrice *= materialMultiplier[config.material] || 1;

  // Size multiplier
  const sizeMultiplier: Record<string, number> = {
    small: 0.7,
    medium: 1.0,
    large: 1.4,
    xlarge: 1.8,
  };
  basePrice *= sizeMultiplier[config.size] || 1;

  // Length adjustment
  const length = parseInt(config.length);
  basePrice *= 1 + (length - 8) * 0.05;

  // Embellishment cost
  const embellishmentCost: Record<string, number> = {
    plain: 0,
    beaded: 100,
    twisted: 50,
    embroidered: 150,
    ornate: 200,
  };
  basePrice += embellishmentCost[config.embellishment] || 0;

  // Finish cost
  const finishCost: Record<string, number> = {
    standard: 0,
    premium: 75,
    weatherproof: 100,
    luxury: 150,
  };
  basePrice += finishCost[config.finishType] || 0;

  // Quantity discount
  let discount = 1;
  if (config.quantity >= 100) discount = 0.85;
  else if (config.quantity >= 50) discount = 0.90;
  else if (config.quantity >= 25) discount = 0.95;

  const unitPrice = Math.round(basePrice * discount);
  const totalPrice = unitPrice * config.quantity;

  // Lead time calculation
  let leadTimeDays = 21; // Base lead time
  if (config.embellishment === "ornate" || config.embellishment === "embroidered") leadTimeDays += 14;
  if (config.quantity > 100) leadTimeDays += 7;
  if (config.finishType === "luxury") leadTimeDays += 7;

  return { unitPrice, totalPrice, leadTimeDays };
}

// Warning checks
function checkWarnings(config: ConfiguratorState): string[] {
  const warnings: string[] = [];

  // Material-color compatibility
  if (config.material === "metallic" && config.color === "custom") {
    warnings.push("Custom colors for metallic threads require approval");
  }

  // Size-embellishment check
  if (config.size === "small" && config.embellishment === "ornate") {
    warnings.push("Ornate details may not be visible on small sizes");
  }

  // High quantity check
  if (config.quantity > 200) {
    warnings.push("Large orders require production scheduling confirmation");
  }

  // Length constraints
  const length = parseInt(config.length);
  if (length > 20 && config.baseProduct === "tassel") {
    warnings.push("Extra-long tassels may require special handling");
  }

  // Finish compatibility
  if (config.finishType === "weatherproof" && config.material === "silk") {
    warnings.push("Weatherproof finish may affect silk texture");
  }

  return warnings;
}

export default ConfiguratorSummary;
