
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
              Welcome to our esteemed manufacturing company, where innovation, quality, and creativity converge to bring you a remarkable array of tassels, tiebacks, lace, cords, and trimmings. With a legacy of excellence, we have become a leading force in the industry, trusted by designers, decorators, and artisans worldwide.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At our cutting-edge manufacturing facility, we combine traditional craftsmanship with advanced technology to produce an extensive range of exquisite trimmings. Our skilled artisans and designers work in harmony to create products that reflect meticulous attention to detail and showcase the latest trends in decorative accents.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every piece we create celebrates the perfect balance between heritage techniques and modern innovation, ensuring that each product meets the highest standards of quality and design excellence.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary hover:text-accent transition-colors">
              <span className="mr-2 border-b border-current pb-1">Discover Our Manufacturing Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/aa29cfdf-058d-401f-9252-d8254e582349.png" 
                alt="Luxury tassels collection" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-50 flex items-center justify-center p-6 shadow-lg">
                <p className="font-serif text-center text-lg">
                  Crafting excellence since our founding
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
