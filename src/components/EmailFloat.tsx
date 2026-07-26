import { Mail } from "lucide-react";

const EmailFloat = () => {
  const email = "support@patwamanufacturer.com";
  const subject = "Inquiry about passementerie products";

  const handleEmailClick = () => {
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = url;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleEmailClick}
        className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
        aria-label="Email us at support@patwamanufacturer.com"
      >
        <Mail size={24} />
      </button>
    </div>
  );
};

export default EmailFloat;
