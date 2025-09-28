
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Sparkles } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Submitting email:", email);
      setSubmitted(true);
      setEmail("");
      setIsLoading(false);
      
      // Reset submission status after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/20 mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Mail className="h-8 w-8 text-gold-300" />
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Stay <span className="gradient-text">Inspired</span>
          </h2>
          <p className="mb-10 text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Join our exclusive mailing list to receive updates on new collections, 
            design insights, special events, and insider access to our latest creations.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="relative">
              <motion.div
                className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-foreground/60" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full py-4 pl-12 pr-4 bg-transparent border-0 focus:outline-none text-primary-foreground placeholder:text-primary-foreground/60"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading || !email}
                  className={`magnetic-button py-4 px-8 bg-gold-400 text-primary font-semibold rounded-xl hover:bg-gold-500 transition-all duration-300 flex items-center justify-center min-w-[140px] ${
                    isLoading || !email ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isLoading && email ? { scale: 1.05 } : {}}
                  whileTap={!isLoading && email ? { scale: 0.95 } : {}}
                >
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2"
                      >
                        <Sparkles className="h-4 w-4" />
                        <span>Subscribe</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </div>
            
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl"
                >
                  <div className="flex items-center justify-center space-x-2 text-green-300">
                    <Check className="h-5 w-5" />
                    <span className="font-medium">Thank you for subscribing! Welcome to our community.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <p className="mt-6 text-sm text-primary-foreground/70">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Patwa Manufacturer.
              <br />
              <span className="text-xs">Unsubscribe at any time. We respect your privacy.</span>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
