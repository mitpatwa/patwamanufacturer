
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, lazy, Suspense } from "react";

import WhatsAppIcon from "./components/WhatsAppIcon";
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
const WindowTreatmentsCollection = lazy(() => import("./pages/collections/WindowTreatmentsCollection"));
const FurnitureTrimsCollection = lazy(() => import("./pages/collections/FurnitureTrimsCollection"));
const TieBacksCollection = lazy(() => import("./pages/collections/TieBacksCollection"));
const TableLinensCollection = lazy(() => import("./pages/collections/TableLinensCollection"));
const OutdoorFabricsCollection = lazy(() => import("./pages/collections/OutdoorFabricsCollection"));
const HomeAccessoriesCollection = lazy(() => import("./pages/collections/HomeAccessoriesCollection"));
const WindowShadesCollection = lazy(() => import("./pages/collections/WindowShadesCollection"));
const CustomServices = lazy(() => import("./pages/CustomServices"));
const Craftsmanship = lazy(() => import("./components/Craftsmanship"));
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
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/collections/tassels" element={<TasselsCollection />} />
              <Route path="/collections/fringes" element={<FringesCollection />} />
              <Route path="/collections/braids" element={<BraidsCollection />} />
              <Route path="/collections/cords" element={<CordsCollection />} />
              <Route path="/collections/embelishments" element={<EmbelishmentsCollection />} />
              <Route path="/collections/window-treatments" element={<WindowTreatmentsCollection />} />
              <Route path="/collections/furniture-trims" element={<FurnitureTrimsCollection />} />
              <Route path="/collections/tie-backs" element={<TieBacksCollection />} />
              <Route path="/collections/table-linens" element={<TableLinensCollection />} />
              <Route path="/collections/outdoor-fabrics" element={<OutdoorFabricsCollection />} />
              <Route path="/collections/home-accessories" element={<HomeAccessoriesCollection />} />
              <Route path="/collections/window-shades" element={<WindowShadesCollection />} />
              <Route path="/custom-services" element={<CustomServices />} />
              <Route path="/craftsmanship" element={<Craftsmanship />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/analysis" element={<SiteAnalysis />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
      <WhatsAppIcon phoneNumber="+919322140480" />
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
