
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react"; // Import lazy and Suspense

// Import pages dynamically using React.lazy
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Inquiry = lazy(() => import("./pages/Inquiry"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TasselsCollection = lazy(() => import("./pages/collections/TasselsCollection"));
const FringesCollection = lazy(() => import("./pages/collections/FringesCollection"));
const BraidsCollection = lazy(() => import("./pages/collections/BraidsCollection"));
const CordsCollection = lazy(() => import("./pages/collections/CordsCollection"));
const EmbelishmentsCollection = lazy(() => import("./pages/collections/EmbelishmentsCollection"));
const CustomServices = lazy(() => import("./pages/CustomServices"));
const Craftsmanship = lazy(() => import("./components/Craftsmanship")); // Assuming Craftsmanship is a page or a significant component to lazy load
const Sustainability = lazy(() => import("./pages/Sustainability"));
const SiteAnalysis = lazy(() => import("./pages/SiteAnalysis"));


const queryClient = new QueryClient();

const ScrollToTop = () => {
 const { pathname } = useLocation();

 useEffect(() => {
 window.scrollTo(0, 0);
  }, [pathname]);
 return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Render the component here */}
        <Suspense fallback={<div>Loading...</div>}> {/* Wrap Routes with Suspense */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/collections/tassels" element={<TasselsCollection />} />
            <Route path="/collections/fringes" element={<FringesCollection />} />
            <Route path="/collections/braids" element={<BraidsCollection />} />
            <Route path="/collections/cords" element={<CordsCollection />} />
            <Route path="/collections/embelishments" element={<EmbelishmentsCollection />} />
            <Route path="/custom-services" element={<CustomServices />} />
            <Route path="/craftsmanship" element={<Craftsmanship />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/analysis" element={<SiteAnalysis />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;
