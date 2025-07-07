
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import ProductShowcase from "../components/ProductShowcase";
import Story from "../components/Story";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Workshop from "../components/Workshop";
import PassementerieSelector from "../components/PassementerieSelector";
import CustomizationHighlight from "../components/CustomizationHighlight";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collections />
        <ProductShowcase />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <CustomizationHighlight />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Story />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Workshop />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <PassementerieSelector />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Newsletter />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
