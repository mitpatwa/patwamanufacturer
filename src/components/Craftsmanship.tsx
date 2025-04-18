
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Craftsmanship = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Our Craftsmanship
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine traditional techniques with modern innovation to create exquisite passementerie that stands the test of time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-sand-100 rounded-full flex items-center justify-center mb-6">
              <span className="font-serif text-xl">01</span>
            </div>
            <h3 className="font-serif text-xl mb-4">Traditional Methods</h3>
            <p className="text-muted-foreground mb-4">
              Our artisans employ time-honored techniques passed down through generations, preserving the heritage of passementerie craftsmanship.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-sand-100 rounded-full flex items-center justify-center mb-6">
              <span className="font-serif text-xl">02</span>
            </div>
            <h3 className="font-serif text-xl mb-4">Quality Materials</h3>
            <p className="text-muted-foreground mb-4">
              We source only the finest materials, including silk, cotton, and metallic threads, ensuring that each piece meets our exacting standards.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-sand-100 rounded-full flex items-center justify-center mb-6">
              <span className="font-serif text-xl">03</span>
            </div>
            <h3 className="font-serif text-xl mb-4">Meticulous Attention</h3>
            <p className="text-muted-foreground mb-4">
              Every detail is carefully considered, from the initial design to the final twist of a tassel, resulting in pieces of exceptional quality.
            </p>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3" 
              alt="Detailed craftsmanship" 
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium mb-6">
              The Art of Passementerie
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passementerie is the art of making elaborate trimmings such as tassels, cords, and fringes for furnishings, clothing, and other textiles. This intricate craft has adorned palaces, fine homes, and couture fashion for centuries.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At our workshop, we honor this tradition while incorporating contemporary design elements to create pieces that complement both classical and modern interiors.
            </p>
            <Link to="/custom-services" className="inline-flex items-center text-primary hover:text-accent transition-colors">
              <span className="mr-2 border-b border-current pb-1">Explore Our Custom Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
