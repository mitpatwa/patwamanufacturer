import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Save, Share2, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ConfiguratorOptions from "@/components/configurator/ConfiguratorOptions";
import ConfiguratorPreview from "@/components/configurator/ConfiguratorPreview";
import ConfiguratorSummary from "@/components/configurator/ConfiguratorSummary";
import { toast } from "sonner";

export interface ConfiguratorState {
  baseProduct: string;
  material: string;
  color: string;
  size: string;
  length: string;
  embellishment: string;
  finishType: string;
  quantity: number;
}

const ProductConfigurator = () => {
  const navigate = useNavigate();
  const [config, setConfig] = useState<ConfiguratorState>({
    baseProduct: "tassel",
    material: "silk",
    color: "gold",
    size: "medium",
    length: "8",
    embellishment: "plain",
    finishType: "standard",
    quantity: 10,
  });

  const handleConfigChange = (updates: Partial<ConfiguratorState>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const handleSave = () => {
    localStorage.setItem("savedConfig", JSON.stringify(config));
    toast.success("Configuration saved successfully");
  };

  const handleShare = () => {
    const configUrl = `${window.location.origin}/configurator?config=${btoa(JSON.stringify(config))}`;
    navigator.clipboard.writeText(configUrl);
    toast.success("Configuration link copied to clipboard");
  };

  const handleDownloadSpec = () => {
    const specContent = `
PATWA MANUFACTURER - CUSTOM PRODUCT SPECIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONFIGURATION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Product Type: ${config.baseProduct}
Material: ${config.material}
Color: ${config.color}
Size: ${config.size}
Length: ${config.length} inches
Embellishment: ${config.embellishment}
Finish: ${config.finishType}
Quantity: ${config.quantity} units

Generated: ${new Date().toLocaleDateString()}

Contact: +91 93221 40480
Website: patwamanufacturer.lovable.app
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
    const blob = new Blob([specContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `patwa-custom-${config.baseProduct}-${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("Specification sheet downloaded");
  };

  return (
    <>
      <Helmet>
        <title>Custom Passementerie Configurator | Design Bespoke Trims Online | Patwa Manufacturer</title>
        <meta name="description" content="Interactive passementerie configurator to design custom tassels, fringes, braids, and trims. Live preview, instant pricing, spec sheet download, and save/share options." />
        <meta name="keywords" content="passementerie configurator, custom trim builder, design custom tassels, bespoke passementerie tool, interactive trim designer, custom trim configurator" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/configurator" />
        <meta property="og:title" content="Custom Passementerie Configurator | Patwa Manufacturer" />
        <meta property="og:description" content="Design your bespoke passementerie online with live preview and instant pricing." />
        <meta property="og:url" content="https://patwamanufacturer.lovable.app/configurator" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Passementerie Product Configurator",
            "description": "Interactive design tool for custom passementerie",
            "url": "https://patwamanufacturer.lovable.app/configurator",
            "applicationCategory": "DesignApplication"
          }`}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Top Bar */}
        <header className="border-b bg-card sticky top-0 z-50">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(-1)}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <div>
                  <h1 className="text-xl font-serif font-medium">Product Configurator</h1>
                  <p className="text-sm text-muted-foreground">Design your custom passementerie</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownloadSpec} className="gap-2">
                  <Download className="h-4 w-4" />
                  Spec Sheet
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Layout */}
        <div className="container-custom py-6">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left: Options Panel */}
            <div className="lg:col-span-3">
              <ConfiguratorOptions config={config} onChange={handleConfigChange} />
            </div>

            {/* Center: Live Preview */}
            <div className="lg:col-span-6">
              <ConfiguratorPreview config={config} />
            </div>

            {/* Right: Summary & CTA */}
            <div className="lg:col-span-3">
              <ConfiguratorSummary config={config} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductConfigurator;
