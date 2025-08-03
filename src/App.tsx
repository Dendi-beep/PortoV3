import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Home } from "@/components/pages/Home";
import { About } from "@/components/pages/About";
import { Projects } from "@/components/pages/Projects";
import { Contact } from "@/components/pages/Contact";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";

export type PageType = "home" | "about" | "projects" | "contact";

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="pt-16 min-h-screen transition-all duration-300">
        {renderPage()}
      </main>

      <Toaster />
    </div>
  );
}

export default App;
