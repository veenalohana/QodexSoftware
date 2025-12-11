import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Software from "./pages/CustomSoftware";
import Mobile from "./pages/MobileApp";
import Website from "./pages/WebsiteDevelopment";
import Graphic from "./pages/GraphicBranding";
import UIUX from "./pages/UiUx";



import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllServices from "./pages/AllServices";
import AllPortfolio from "./pages/AllPortfolio";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import CustomSoftware from "./pages/CustomSoftware";
import MobileApp from "./pages/MobileApp";
import UiUx from "./pages/UiUx";
import GraphicBranding from "./pages/GraphicBranding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
           <Route path="/about" element={<About />} />
           <Route path="/team" element={<Team />} />
          <Route path="/CustomSoftware" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MobileApp" element={<Mobile />} />
          <Route path="/WebsiteDevelopment" element={<Website />} />
          <Route path="/GraphicBranding" element={<Graphic />} />
          <Route path="/UiUx" element={<UIUX />} />

          <Route path="/" element={<Index />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/portfolio" element={<AllPortfolio />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/mobile-app" element={<MobileApp />} />
          <Route path="/services/ui-ux" element={<UiUx />} />
          <Route path="/services/graphic-branding" element={<GraphicBranding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
