
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Workshop = () => {
  return (
    <section className="py-20 bg-sand-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Our Workshop
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At our cutting-edge manufacturing facility, we combine traditional craftsmanship with advanced technology to produce an extensive range of exquisite trimmings. Our skilled artisans and designers work in harmony to create products that reflect meticulous attention to detail.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With our advanced production capabilities, we can fulfill orders of any size while maintaining the highest standards of quality. From small custom projects to large commercial orders, our workshop is equipped to meet the diverse needs of our clients.
            </p>
            <Link to="/inquiry" className="btn-primary">
              Make an Inquiry
            </Link>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3" 
              alt="Workshop detail" 
              className="w-full aspect-square object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1523567830207-96731740fa71?ixlib=rb-4.0.3" 
              alt="Artisan working" 
              className="w-full aspect-square object-cover rounded-lg shadow-lg mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1561913955-b55882fb77a7?ixlib=rb-4.0.3" 
              alt="Materials" 
              className="w-full aspect-square object-cover rounded-lg shadow-lg mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3" 
              alt="Production process" 
              className="w-full aspect-square object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
