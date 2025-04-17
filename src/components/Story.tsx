
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <section className="py-20 bg-sand-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Since our founding in 1942, Samuel & Sons has been dedicated to creating the world's finest trimmings and embellishments. Our legacy is built on an unwavering commitment to quality, craftsmanship, and innovative design.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every piece in our collection reflects the expertise of skilled artisans who meticulously craft each detail. From traditional techniques passed down through generations to cutting-edge design innovations, our journey celebrates the harmonious blend of heritage and modernity.
            </p>
            <Link to="#" className="inline-flex items-center text-primary hover:text-accent transition-colors">
              <span className="mr-2 border-b border-current pb-1">Discover Our Heritage</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3" 
                alt="Samuel & Sons workshop" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-50 flex items-center justify-center p-6 shadow-lg">
                <p className="font-serif text-center text-lg">
                  Quality craftsmanship since 1942
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
