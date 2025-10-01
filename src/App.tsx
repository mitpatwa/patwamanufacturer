
import React, { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import LoadingSpinner from "./components/LoadingSpinner";
import NotificationBanner from "./components/NotificationBanner";
import { initializePerformanceMonitoring } from "./utils/performance";
// Import pages dynamically using React.lazy
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const PassementerieManufacturer = lazy(() => import("./pages/PassementerieManufacturer"));

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
const SEO = lazy(() => import("./pages/SEO"));
const Blog = lazy(() => import("./pages/Blog"));
const TradeProgram = lazy(() => import("./pages/TradeProgram"));
const FindDesigner = lazy(() => import("./pages/FindDesigner"));
const Support = lazy(() => import("./pages/Support"));
const OrderSamples = lazy(() => import("./pages/OrderSamples"));
const ReturnsExchanges = lazy(() => import("./pages/ReturnsExchanges"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  // Initialize performance monitoring
  React.useEffect(() => {
    initializePerformanceMonitoring();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={300}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" text="Loading page..." />
              </div>
            }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/passementerie-manufacturer" element={<PassementerieManufacturer />} />
              
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
              <Route path="/seo" element={<SEO />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/trade-program" element={<TradeProgram />} />
              <Route path="/find-designer" element={<FindDesigner />} />
              <Route path="/support" element={<Support />} />
              <Route path="/order-samples" element={<OrderSamples />} />
              <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
           </Suspense>
        </BrowserRouter>
      </TooltipProvider>
      
      {/* Notification Banner */}
      <NotificationBanner
        type="promotion"
        title="🎉 New Collection Available!"
        message="Discover our latest luxury passementerie collection with exclusive designs."
        actionText="Explore Now"
        actionUrl="/collections"
        autoHide={true}
        duration={8000}
      />
    </QueryClientProvider>
  </HelmetProvider>
  );
};

export default App;
