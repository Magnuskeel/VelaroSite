import { Button } from "@/components/ui/button";
import velaroLogoPath from "@assets/velaro_logo_1757533864530.png";

export default function Hero() {
  const scrollToHelp = () => {
    const element = document.getElementById('help');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-hero text-primary-foreground pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        {/* Velaro logo displayed prominently */}
        <div className="mb-8">
          <img 
            src={velaroLogoPath} 
            alt="Velaro Logo" 
            className="mx-auto h-24 w-24 sm:h-32 sm:w-32 mb-6" 
            data-testid="logo-hero"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-slogan">
          Customer & Vendor Portal for Business Central
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed" data-testid="text-elevator-pitch">
          Velaro is a Business Central extension that provides your customers and vendors with a powerful self-service portal. Streamline interactions, enable secure access to information, and enhance business relationships all within your Business Central ecosystem.
        </p>
        
        <Button 
          onClick={scrollToHelp}
          className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1" 
          data-testid="button-get-started"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
