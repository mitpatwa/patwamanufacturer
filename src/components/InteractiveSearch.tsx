import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, Sparkles, Zap } from "lucide-react";

const categories = [
  { id: "all", name: "All Products", icon: Sparkles },
  { id: "tassels", name: "Tassels", icon: Zap },
  { id: "fringes", name: "Fringes", icon: Sparkles },
  { id: "braids", name: "Braids", icon: Zap },
  { id: "cords", name: "Cords", icon: Sparkles },
  { id: "embellishments", name: "Embellishments", icon: Zap },
];

interface InteractiveSearchProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const InteractiveSearch = ({ isOpen: externalIsOpen, onToggle }: InteractiveSearchProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isSearching, setIsSearching] = useState(false);

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setIsSearching(true);
    
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  const toggleSearch = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
    
    if (!isOpen) {
      setTimeout(() => {
        document.getElementById('search-input')?.focus();
      }, 300);
    }
  };

  return (
    <>
      {/* Search Trigger Button - Hidden, will be triggered from Header */}

      {/* Search Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={toggleSearch}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-floating max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-sand-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    Search Our <span className="gradient-text">Collection</span>
                  </h3>
                  <button
                    onClick={toggleSearch}
                    className="h-10 w-10 rounded-full bg-sand-100 hover:bg-sand-200 flex items-center justify-center transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Search for tassels, fringes, braids..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-sand-200 rounded-xl focus:border-gold-400 focus:outline-none transition-colors"
                  />
                  {isSearching && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gold-400"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <Filter className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium text-muted-foreground">Categories</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <motion.button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                            selectedCategory === category.id
                              ? "bg-gold-400 text-white shadow-glow"
                              : "bg-sand-100 hover:bg-sand-200 text-foreground"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconComponent className="h-4 w-4" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    className="interactive-card p-4 bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles className="h-6 w-6 text-gold-600 mb-2" />
                    <h4 className="font-semibold text-foreground">Featured Products</h4>
                    <p className="text-sm text-muted-foreground">Discover our most popular items</p>
                  </motion.button>

                  <motion.button
                    className="interactive-card p-4 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground">Custom Orders</h4>
                    <p className="text-sm text-muted-foreground">Create something unique</p>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveSearch;