import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { Award, Users, Globe, Star } from "lucide-react";

const stats = [
  {
    id: 1,
    number: 25,
    suffix: "+",
    label: "Years of Excellence",
    description: "Crafting luxury passementerie",
    icon: Award,
    color: "text-gold-600"
  },
  {
    id: 2,
    number: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Interior designers worldwide",
    icon: Users,
    color: "text-primary"
  },
  {
    id: 3,
    number: 50,
    suffix: "+",
    label: "Countries Served",
    description: "Global luxury market",
    icon: Globe,
    color: "text-green-600"
  },
  {
    id: 4,
    number: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on customer reviews",
    icon: Star,
    color: "text-gold-600"
  }
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-gradient-to-br from-primary/5 to-gold-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading mx-auto">
            Numbers that reflect our commitment to excellence and customer satisfaction in the luxury passementerie industry.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  {/* Icon with glow effect */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300 ${stat.color}`}
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(0,0,0,0)",
                        "0 0 20px rgba(0,0,0,0.1)",
                        "0 0 0 0 rgba(0,0,0,0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <IconComponent className="h-8 w-8" />
                  </motion.div>

                  {/* Animated Counter */}
                  <div className="mb-4">
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      className={`text-4xl md:text-5xl font-bold ${stat.color} gradient-text`}
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading interior designers, luxury hotels, and prestigious institutions worldwide. 
            Our commitment to quality and craftsmanship has made us a preferred partner in the luxury design industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
