import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import RecitsMusique from "./pages/RecitsMusique.tsx";
import SpectacleDetail from "./pages/SpectacleDetail.tsx";
import SciencesNaturelles from "./pages/SciencesNaturelles.tsx";
import ArtPlastique from "./pages/ArtPlastique.tsx";
import Biographie from "./pages/Biographie.tsx";
import UniversDetail from "./pages/UniversDetail.tsx";
import Contact from "./pages/Contact.tsx";
import LettreInformation from "./pages/LettreInformation.tsx";
import Agenda from "./pages/Agenda.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recits-musique" element={<RecitsMusique />} />
          <Route path="/recits-musique/:slug" element={<SpectacleDetail />} />
          <Route path="/sciences-naturelles" element={<SciencesNaturelles />} />
          <Route path="/art-plastique" element={<ArtPlastique />} />
          <Route path="/biographie" element={<Biographie />} />
          <Route path="/univers/:slug" element={<UniversDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lettre-information" element={<LettreInformation />} />
          <Route path="/agenda" element={<Agenda />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
