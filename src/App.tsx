
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Inquiry from "./pages/Inquiry";
import NotFound from "./pages/NotFound";
import TasselsCollection from "./pages/collections/TasselsCollection";
import FringesCollection from "./pages/collections/FringesCollection";
import BraidsCollection from "./pages/collections/BraidsCollection";
import CordsCollection from "./pages/collections/CordsCollection";
import EmbelishmentsCollection from "./pages/collections/EmbelishmentsCollection";
import CustomServices from "./pages/CustomServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
