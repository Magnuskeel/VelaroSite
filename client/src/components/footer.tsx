import velaroLogoPath from "@assets/velaro_logo_1757533864530.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={velaroLogoPath} 
                alt="Velaro Logo" 
                className="h-8 w-8 filter brightness-0 invert" 
                data-testid="logo-footer"
              />
              <span className="text-xl font-semibold">Velaro</span>
            </div>
            <p className="text-primary-foreground/80" data-testid="text-footer-description">
              Customer and vendor portal for Microsoft Dynamics 365 Business Central.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('overview')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-overview-footer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('help')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-help-footer"
                >
                  Help & FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('privacy')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-privacy-footer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('eula')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-eula-footer"
                >
                  EULA
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-support-title">Support</h4>
            <p className="text-primary-foreground/80 mb-2" data-testid="text-support-description">
              Need help? Contact our support team for assistance with installation, portal setup, or technical questions.
            </p>
            <p className="text-primary-foreground/80" data-testid="text-support-email">
              support@velaro.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80" data-testid="text-copyright">
            © 2024 Velaro. All rights reserved. Microsoft and Dynamics 365 are trademarks of Microsoft Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
