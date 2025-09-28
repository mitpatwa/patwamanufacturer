import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Gift, Star } from "lucide-react";

interface NotificationBannerProps {
  type?: "info" | "success" | "warning" | "promotion";
  title: string;
  message: string;
  actionText?: string;
  actionUrl?: string;
  dismissible?: boolean;
  autoHide?: boolean;
  duration?: number;
}

const NotificationBanner = ({
  type = "info",
  title,
  message,
  actionText,
  actionUrl,
  dismissible = true,
  autoHide = true,
  duration = 5000
}: NotificationBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoHide, duration]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <Star className="h-5 w-5 text-green-600" />;
      case "warning":
        return <Bell className="h-5 w-5 text-yellow-600" />;
      case "promotion":
        return <Gift className="h-5 w-5 text-gold-600" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "promotion":
        return "bg-gradient-to-r from-gold-50 to-gold-100 border-gold-200";
      default:
        return "bg-primary/5 border-primary/20";
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`fixed top-0 left-0 right-0 z-50 p-4 ${getBackgroundColor()} border-b shadow-sm`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getIcon()}
              <div>
                <h4 className="font-semibold text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">{message}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {actionText && actionUrl && (
                <a
                  href={actionUrl}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  {actionText}
                </a>
              )}
              
              {dismissible && (
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Dismiss notification"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NotificationBanner;
