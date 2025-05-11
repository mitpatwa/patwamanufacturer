
import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { allProducts } from "@/data/products"
import { Card } from "@/components/ui/card"

const PassementerieSelector = () => {
  const [complexity, setComplexity] = useState<number[]>([3])
  const [budget, setBudget] = useState<number[]>([5])
  const [quantity, setQuantity] = useState<number[]>([50])
  
  // Filter products based on complexity level
  const getProductsByComplexity = () => {
    const complexityLevel = complexity[0]
    const productCount = Math.max(6, complexityLevel * 2)
    
    // Select a variety of products with emphasis on tassels when complexity is higher
    return allProducts
      .filter(p => {
        if (complexityLevel > 6) {
          // Higher complexity favors more ornate items like tassels
          return p.category === "Tassel" || p.category === "Tieback"
        }
        return true
      })
      .sort(() => Math.random() - 0.5) // Shuffle array
      .slice(0, productCount)
  }
  
  const selectedProducts = getProductsByComplexity()

  return (
    <section className="py-12 bg-sand-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8">
              Custom Passementerie Selection
            </h2>
            <div className="space-y-10">
              <div className="space-y-4">
                <label className="flex justify-between">
                  <span className="font-medium">Design Complexity</span>
                  <span className="text-muted-foreground">{complexity[0]}/10</span>
                </label>
                <Slider
                  defaultValue={[complexity[0]]}
                  max={10}
                  step={1}
                  onValueChange={setComplexity}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Minimal</span>
                  <span>Ornate</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="flex justify-between">
                  <span className="font-medium">Budget Range</span>
                  <span className="text-muted-foreground">${budget[0] * 100}/unit</span>
                </label>
                <Slider
                  defaultValue={[budget[0]]}
                  max={10}
                  step={1}
                  onValueChange={setBudget}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$100</span>
                  <span>$1000</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="flex justify-between">
                  <span className="font-medium">Quantity</span>
                  <span className="text-muted-foreground">{quantity[0]} units</span>
                </label>
                <Slider
                  defaultValue={[quantity[0]]}
                  min={10}
                  max={100}
                  step={10}
                  onValueChange={setQuantity}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10 units</span>
                  <span>100 units</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="w-full py-3 px-6 bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-medium">
                  Request Custom Quote
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-xl font-medium mb-6">
              Recommended Passementerie ({selectedProducts.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-sm font-medium px-3 py-1 bg-primary/80">
                        Quick View
                      </p>
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PassementerieSelector
