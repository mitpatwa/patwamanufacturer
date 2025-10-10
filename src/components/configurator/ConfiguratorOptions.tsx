import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ConfiguratorState } from "@/pages/ProductConfigurator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ConfiguratorOptionsProps {
  config: ConfiguratorState;
  onChange: (updates: Partial<ConfiguratorState>) => void;
}

const ConfiguratorOptions = ({ config, onChange }: ConfiguratorOptionsProps) => {
  return (
    <Card className="p-4">
      <h2 className="font-serif text-lg font-medium mb-4">Customization Options</h2>
      
      <Accordion type="multiple" defaultValue={["base", "materials", "dimensions", "details"]} className="w-full">
        <AccordionItem value="base">
          <AccordionTrigger className="text-sm">Product Type</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label>Base Product</Label>
              <Select value={config.baseProduct} onValueChange={(value) => onChange({ baseProduct: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tassel">Tassel</SelectItem>
                  <SelectItem value="tieback">Tieback</SelectItem>
                  <SelectItem value="fringe">Fringe</SelectItem>
                  <SelectItem value="braid">Braid</SelectItem>
                  <SelectItem value="cord">Cord</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="materials">
          <AccordionTrigger className="text-sm">Materials & Colors</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label>Material</Label>
              <Select value={config.material} onValueChange={(value) => onChange({ material: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="silk">Premium Silk</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="metallic">Metallic Thread</SelectItem>
                  <SelectItem value="mixed">Mixed Fibers</SelectItem>
                  <SelectItem value="wool">Wool</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Color</Label>
              <Select value={config.color} onValueChange={(value) => onChange({ color: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gold">Gold</SelectItem>
                  <SelectItem value="silver">Silver</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="white">Ivory White</SelectItem>
                  <SelectItem value="red">Deep Red</SelectItem>
                  <SelectItem value="blue">Royal Blue</SelectItem>
                  <SelectItem value="green">Forest Green</SelectItem>
                  <SelectItem value="custom">Custom Color</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dimensions">
          <AccordionTrigger className="text-sm">Dimensions</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label>Size</Label>
              <Select value={config.size} onValueChange={(value) => onChange({ size: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (4-6")</SelectItem>
                  <SelectItem value="medium">Medium (7-10")</SelectItem>
                  <SelectItem value="large">Large (11-14")</SelectItem>
                  <SelectItem value="xlarge">Extra Large (15"+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex justify-between">
                <span>Length</span>
                <span className="text-muted-foreground">{config.length} inches</span>
              </Label>
              <Slider
                value={[parseInt(config.length)]}
                min={4}
                max={24}
                step={1}
                onValueChange={(value) => onChange({ length: value[0].toString() })}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="details">
          <AccordionTrigger className="text-sm">Details & Finish</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-2">
            <div className="space-y-2">
              <Label>Embellishment</Label>
              <Select value={config.embellishment} onValueChange={(value) => onChange({ embellishment: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plain">Plain</SelectItem>
                  <SelectItem value="beaded">Beaded</SelectItem>
                  <SelectItem value="twisted">Twisted Rope</SelectItem>
                  <SelectItem value="embroidered">Embroidered</SelectItem>
                  <SelectItem value="ornate">Ornate Detail</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Finish Type</Label>
              <Select value={config.finishType} onValueChange={(value) => onChange({ finishType: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium Coating</SelectItem>
                  <SelectItem value="weatherproof">Weatherproof</SelectItem>
                  <SelectItem value="luxury">Luxury Finish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex justify-between">
                <span>Quantity</span>
                <span className="text-muted-foreground">{config.quantity} units</span>
              </Label>
              <Slider
                value={[config.quantity]}
                min={10}
                max={500}
                step={10}
                onValueChange={(value) => onChange({ quantity: value[0] })}
              />
              <p className="text-xs text-muted-foreground">Minimum order: 10 units</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default ConfiguratorOptions;
