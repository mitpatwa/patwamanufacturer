
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import ProductShowcase from "../components/ProductShowcase";
import Story from "../components/Story";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Workshop from "../components/Workshop";
import PassementerieSelector from "../components/PassementerieSelector";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <ProductShowcase />
        <Story />
        <Workshop />
        <PassementerieSelector />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
