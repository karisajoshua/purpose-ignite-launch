import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ProgrammesPage from "./pages/ProgrammesPage";
import ProgrammeDetailPage from "./pages/ProgrammeDetailPage";
import MentorshipPage from "./pages/MentorshipPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContactPage from "./pages/ContactPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />
          <BackToTop />

          <Routes>
            <Route path="/" element={<Index />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/gallery" element={<GalleryPage />} />

            <Route path="/programmes" element={<ProgrammesPage />} />

            <Route
              path="/programmes/:slug"
              element={<ProgrammeDetailPage />}
            />

            <Route path="/mentorship" element={<MentorshipPage />} />

            <Route path="/services" element={<ServicesPage />} />

            <Route path="/blog" element={<BlogPage />} />

            <Route path="/blog/:slug" element={<BlogDetailPage />} />

            <Route path="/contact" element={<ContactPage />} />

            <Route path="/admin" element={<AdminLoginPage />} />

            <Route path="/dashboard" element={<UserDashboardPage />} />

            <Route
              path="/admin/dashboard"
              element={<AdminDashboardPage />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
