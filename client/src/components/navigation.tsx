import { useState } from "react";
import { Menu, X } from "lucide-react";
import velaroLogoPath from "@assets/velaro_logo_1757533864530.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src={velaroLogoPath} 
              alt="Velaro Logo" 
              className="h-8 w-8" 
              data-testid="logo-nav"
            />
            <span className="text-lg font-semibold text-foreground">Velaro</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('overview')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-overview"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('help')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-help"
            >
              Help & FAQ
            </button>
            <button 
              onClick={() => scrollToSection('privacy')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy
            </button>
            <button 
              onClick={() => scrollToSection('eula')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-eula"
            >
              EULA
            </button>
          </div>
          
          <button 
            className="md:hidden text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <button 
                onClick={() => scrollToSection('overview')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="link-overview-mobile"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="link-pricing-mobile"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('help')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="link-help-mobile"
              >
                Help & FAQ
              </button>
              <button 
                onClick={() => scrollToSection('privacy')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="link-privacy-mobile"
              >
                Privacy
              </button>
              <button 
                onClick={() => scrollToSection('eula')} 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                data-testid="link-eula-mobile"
              >
                EULA
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
