import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export interface FilterOptions {
  categories: string[];
  materials: string[];
  styles: string[];
  colors: string[];
  applications: string[];
  priceRanges: string[];
}

export interface ActiveFilters {
  categories: string[];
  materials: string[];
  styles: string[];
  colors: string[];
  applications: string[];
  priceRanges: string[];
  searchQuery: string;
}

interface ProductFiltersProps {
  filterOptions: FilterOptions;
  activeFilters: ActiveFilters;
  onFilterChange: (filters: ActiveFilters) => void;
  totalProducts: number;
  filteredCount: number;
}

const ProductFilters = ({
  filterOptions,
  activeFilters,
  onFilterChange,
  totalProducts,
  filteredCount,
}: ProductFiltersProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    materials: true,
    styles: false,
    colors: false,
    applications: false,
    priceRanges: false,
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterToggle = (filterType: keyof ActiveFilters, value: string) => {
    const currentValues = activeFilters[filterType] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    onFilterChange({
      ...activeFilters,
      [filterType]: newValues,
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      materials: [],
      styles: [],
      colors: [],
      applications: [],
      priceRanges: [],
      searchQuery: "",
    });
  };

  const getActiveFilterCount = () => {
    return (
      activeFilters.categories.length +
      activeFilters.materials.length +
      activeFilters.styles.length +
      activeFilters.colors.length +
      activeFilters.applications.length +
      activeFilters.priceRanges.length
    );
  };

  const FilterSection = ({
    title,
    filterKey,
    options,
  }: {
    title: string;
    filterKey: keyof ActiveFilters;
    options: string[];
  }) => {
    if (options.length === 0) return null;

    return (
      <div className="mb-6">
        <button
          onClick={() => toggleSection(filterKey)}
          className="flex items-center justify-between w-full mb-3 group"
        >
          <h3 className="font-medium text-sm uppercase tracking-wider">{title}</h3>
          <motion.div
            animate={{ rotate: expandedSections[filterKey] ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </motion.div>
        </button>

        <AnimatePresence>
          {expandedSections[filterKey] && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 overflow-hidden"
            >
              {options.map((option) => {
                const isActive = (activeFilters[filterKey] as string[]).includes(option);
                return (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${filterKey}-${option}`}
                      checked={isActive}
                      onCheckedChange={() => handleFilterToggle(filterKey, option)}
                    />
                    <Label
                      htmlFor={`${filterKey}-${option}`}
                      className="text-sm cursor-pointer flex-1 hover:text-primary transition-colors"
                    >
                      {option}
                    </Label>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        <Separator className="mt-4" />
      </div>
    );
  };

  const FilterContent = () => (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl">Filters</h2>
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          )}
        </div>

        {getActiveFilterCount() > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.entries(activeFilters).map(([key, values]) => {
              if (key === "searchQuery" || !Array.isArray(values) || values.length === 0)
                return null;
              return values.map((value) => (
                <Badge
                  key={`${key}-${value}`}
                  variant="secondary"
                  className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  onClick={() => handleFilterToggle(key as keyof ActiveFilters, value)}
                >
                  {value}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              ));
            })}
          </div>
        )}

        <div className="text-sm text-muted-foreground mb-4">
          Showing {filteredCount} of {totalProducts} products
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-300px)]">
        <FilterSection title="Category" filterKey="categories" options={filterOptions.categories} />
        <FilterSection title="Material" filterKey="materials" options={filterOptions.materials} />
        <FilterSection title="Style" filterKey="styles" options={filterOptions.styles} />
        <FilterSection title="Color" filterKey="colors" options={filterOptions.colors} />
        <FilterSection
          title="Application"
          filterKey="applications"
          options={filterOptions.applications}
        />
        <FilterSection
          title="Price Range"
          filterKey="priceRanges"
          options={filterOptions.priceRanges}
        />
      </ScrollArea>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="sticky top-24 bg-card p-6 rounded-lg border">
          <FilterContent />
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          onClick={() => setIsMobileFilterOpen(true)}
          className="rounded-full shadow-lg"
        >
          <Filter className="h-5 w-5 mr-2" />
          Filters
          {getActiveFilterCount() > 0 && (
            <Badge variant="destructive" className="ml-2">
              {getActiveFilterCount()}
            </Badge>
          )}
        </Button>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-background z-50 shadow-2xl overflow-hidden lg:hidden"
            >
              <div className="p-6 border-b flex items-center justify-between">
                <h2 className="font-serif text-xl">Filters</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-6">
                <FilterContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductFilters;
