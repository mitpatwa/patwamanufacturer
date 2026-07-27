import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Footer from "../components/Footer";
import InquiryForm from "../components/InquiryForm";

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Get a Quote | Patwa Manufacturer</title>
        <meta name="description" content="Tell us about your trim project and we'll quote it. Custom tassels, fringes, braids and cords made to order in India." />
        <link rel="canonical" href="https://patwamanufacturer.lovable.app/inquiry" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Get a Quote | Patwa Manufacturer" />
        <meta property="og:description" content="Tell us about your trim project and we'll quote it, usually within a day or two." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <main role="main" className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-medium mb-3">Get a quote</h1>
          <p className="text-muted-foreground mb-8">
            Send us the details of what you need. Colours, quantities, a photo of the fabric if you have one.
            We usually come back with a price in a day or two.
          </p>
          <InquiryForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inquiry;
