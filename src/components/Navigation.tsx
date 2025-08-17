import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import mkLogo from "@/assets/mk-logo.png";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Marco Krebs Consulting";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        setShowCursor(false); // Hide cursor when typing is complete
      }
    }, 80); // Adjust speed by changing this value (lower = faster)

    return () => clearInterval(typewriterInterval);
  }, [fullText]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-subtle" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 text-foreground hover:text-accent transition-smooth">
            
            <span className="text-base font-medium">
              {displayedText}
              {showCursor && <span className="animate-pulse">|</span>}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("offering")} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              About
            </button>
            <Button variant="ghost" size="sm" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;