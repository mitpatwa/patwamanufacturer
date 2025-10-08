import { Product } from "@/data/products";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductSpecSheetProps {
  product: Product;
}

const ProductSpecSheet = ({ product }: ProductSpecSheetProps) => {
  const generateSpecSheet = () => {
    // Create spec sheet content
    const specContent = `
PRODUCT SPECIFICATION SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PATWA MANUFACTURER
Luxury Passementerie & Decorative Trims
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRODUCT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product Name: ${product.name}
SKU: ${product.sku || `PATWA-${product.id.toString().padStart(4, '0')}`}
Category: ${product.category}
Style: ${product.style || 'Classic'}

DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${product.description}

TECHNICAL SPECIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Material: ${product.material || 'Premium silk and metallic threads'}
Construction: ${product.construction || 'Handcrafted using traditional techniques'}
Finish: ${product.finish || 'Luxury finish with durable coating'}

DIMENSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${product.dimensions?.length ? `Length: ${product.dimensions.length}` : 'Length: Custom available'}
${product.dimensions?.width ? `Width: ${product.dimensions.width}` : 'Width: Custom available'}
${product.dimensions?.height ? `Height: ${product.dimensions.height}` : ''}
${product.weight ? `Weight: ${product.weight}` : 'Weight: Varies by size'}

COLOR OPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Available Colorways: ${product.colorways}
${product.colors ? `Color Options: ${product.colors.join(', ')}` : 'Custom colors available upon request'}

APPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${product.application ? product.application.join('\n• ') : '• Curtains and drapery\n• Upholstery and furniture\n• Cushions and pillows\n• Interior design accents'}

ORDERING INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Minimum Order Quantity: ${product.moq || '10'} units
Lead Time: ${product.leadTime || '4-6 weeks'}
${product.price ? `Price Range: ${product.price.range} per ${product.price.unit}` : 'Price: Contact for quotation'}

CARE INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Dry clean only
• Avoid direct sunlight for extended periods
• Handle with care to preserve intricate details
• Store in a cool, dry place when not in use

CUSTOMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Custom colors available
✓ Bespoke dimensions
✓ Material variations
✓ Design modifications

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Patwa Manufacturer
Website: https://patwamanufacturer.lovable.app
WhatsApp: +91 93221 40480
Email: info@patwamanufacturer.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© ${new Date().getFullYear()} Patwa Manufacturer. All rights reserved.
Handcrafted with excellence since 1985.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    // Create blob and download
    const blob = new Blob([specContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.sku || product.name.replace(/\s+/g, '-')}-spec-sheet.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success("Specification sheet downloaded successfully");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={generateSpecSheet}
      className="gap-2"
    >
      <Download className="h-4 w-4" />
      Download Spec Sheet
    </Button>
  );
};

export default ProductSpecSheet;
