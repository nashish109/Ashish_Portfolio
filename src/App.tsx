import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Welcome/Initializing page as default landing */}
          <Route path="/" element={<Welcome />} />
          
          {/* Main portfolio routes */}
          <Route path="/portfolio" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="experience" element={<Home />} />
            <Route path="projects" element={<Home />} />
            <Route path="certifications" element={<Home />} />
            <Route path="research" element={<Home />} />
            <Route path="contact" element={<Home />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
