
import Header from "../components/Header";
import Footer from "../components/Footer";
import InquiryForm from "../components/InquiryForm";

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-sand-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-center">
                Request a Custom Quote
              </h1>
              <p className="text-muted-foreground text-center mb-12 leading-relaxed">
                Each project is unique, and we'd love to learn about yours. Please fill out the form below, and our team will respond within 48 hours to discuss your custom passementerie requirements.
              </p>

              <InquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Inquiry;
