
import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PassementerieSelector from "@/components/PassementerieSelector";
import { ArrowRight } from "lucide-react";

const CustomServices = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Custom Passementerie Services - Bespoke Trims & Tassels | Patwa Manufacturer</title>
        <meta name="description" content="Custom passementerie and bespoke trim services. We create made-to-order tassels, fringes, braids, and decorative trims for luxury interior design projects worldwide." />
        <meta name="keywords" content="custom passementerie, bespoke trims, made-to-order tassels, custom decorative trims, bespoke interior accessories, luxury custom textiles" />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/custom-services" />
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-sand-100">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Custom Passementerie Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Bespoke trimmings created to your exact specifications by our master craftspeople.
                From private residences to boutique hotels, we bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-serif text-xl font-medium mb-4">Custom Design</h3>
                <p className="text-muted-foreground mb-4">
                  Work directly with our design team to create bespoke trimmings that perfectly complement your interior project.
                </p>
                <a href="#selector" className="inline-flex items-center text-primary hover:underline">
                  Design your piece <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-serif text-xl font-medium mb-4">Color Matching</h3>
                <p className="text-muted-foreground mb-4">
                  Match any trimming in our collection to your specific color palette with our precision dyeing services.
                </p>
                <a href="#selector" className="inline-flex items-center text-primary hover:underline">
                  Explore options <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-serif text-xl font-medium mb-4">Restoration</h3>
                <p className="text-muted-foreground mb-4">
                  Restore and recreate historical trimmings for heritage properties and antique furniture with authentic techniques.
                </p>
                <a href="#selector" className="inline-flex items-center text-primary hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-sand-50">
          <div className="container-custom">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-12 text-center">
              Our Custom Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-sand-200 w-16 h-16 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  1
                </div>
                <h3 className="font-medium mb-2">Consultation</h3>
                <p className="text-muted-foreground">
                  Initial meeting to understand your requirements, style preferences, and project specifications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-sand-200 w-16 h-16 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  2
                </div>
                <h3 className="font-medium mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Our designers create detailed sketches and material samples for your approval.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-sand-200 w-16 h-16 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  3
                </div>
                <h3 className="font-medium mb-2">Production</h3>
                <p className="text-muted-foreground">
                  Skilled artisans handcraft your pieces using premium materials and traditional techniques.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-sand-200 w-16 h-16 rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  4
                </div>
                <h3 className="font-medium mb-2">Delivery</h3>
                <p className="text-muted-foreground">
                  Final quality check before careful packaging and delivery to your location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selector Section */}
        <div id="selector">
          <PassementerieSelector />
        </div>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-8 text-center">
              Our Custom Work
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="aspect-square overflow-hidden">
                  <img 
                    src={`/lovable-uploads/${[
                      '813b0828-f1f8-43d7-9a6c-70ac5196cfd2.png',
                      'fa393750-1cde-4474-bbf5-a168728afc85.png',
                      '42cae155-c4aa-43de-9284-a4e9742f2678.png',
                      'fc494274-86e3-455d-b513-fbfa251b1b11.png',
                      'ecf10800-7f78-46f7-bb79-963c62f67c04.png',
                      'b17a5bdd-8666-478c-b577-d89f09db672f.png',
                      '8a016950-b6c8-4c66-a911-b4012fad02b6.png',
                      '62276329-d2b8-46b7-8040-1c9ce87a985b.png'
                    ][index % 8]}`} 
                    alt={`Custom passementerie project ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomServices;
