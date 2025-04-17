
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would handle the form submission to your API
      console.log("Submitting email:", email);
      setSubmitted(true);
      setEmail("");
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Stay Inspired
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Join our mailing list to receive exclusive updates on new collections, 
            design insights, and special events.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 py-3 px-4 bg-transparent border border-primary-foreground/30 focus:border-primary-foreground outline-none text-primary-foreground placeholder:text-primary-foreground/60"
                required
              />
              <button
                type="submit"
                className="py-3 px-6 bg-primary-foreground text-primary hover:bg-gold-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
            
            {submitted && (
              <p className="mt-4 text-gold-100 animate-fade-in">
                Thank you for subscribing!
              </p>
            )}
            
            <p className="mt-4 text-sm text-primary-foreground/60">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Samuel & Sons.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
