import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Trial",
    description: "Try Velaro with limited features",
    price: "Free",
    period: "14 days",
    features: [
      "Basic portal access",
      "Up to 5 portal users", 
      "Standard support",
      "Basic customization"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Basic",
    description: "Essential portal features for small businesses",
    monthlyPrice: 59.95,
    annualPrice: 611.49, // 59.95 * 12 * 0.85
    features: [
      "Full portal functionality",
      "Up to 50 portal users",
      "Email support",
      "Custom branding",
      "Payment integration",
      "User access controls"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Plus",
    description: "Advanced features for growing businesses",
    monthlyPrice: 89.95,
    annualPrice: 917.49, // 89.95 * 12 * 0.85
    features: [
      "Everything in Basic",
      "Unlimited portal users",
      "Priority support",
      "Advanced customization",
      "API access",
      "Advanced reporting",
      "Single sign-on (SSO)"
    ],
    cta: "Get Started",
    popular: false
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const scrollToHelp = () => {
    const element = document.getElementById('help');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-pricing-title">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8" data-testid="text-pricing-description">
            Choose the plan that fits your business needs. All plans include secure portal access and customer management features.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={cn("text-sm font-medium", !isAnnual ? "text-foreground" : "text-muted-foreground")}>
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                isAnnual ? "bg-primary" : "bg-gray-200"
              )}
              data-testid="toggle-billing-period"
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  isAnnual ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium", isAnnual ? "text-foreground" : "text-muted-foreground")}>
              Annual
              <span className="ml-1 text-xs text-green-600 font-semibold">(Save 15%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name} 
              className={cn(
                "bg-card rounded-lg border border-border p-8 relative",
                tier.popular && "ring-2 ring-primary shadow-lg"
              )}
              data-testid={`card-pricing-${tier.name.toLowerCase()}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-tier-name-${tier.name.toLowerCase()}`}>
                  {tier.name}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-tier-description-${tier.name.toLowerCase()}`}>
                  {tier.description}
                </p>
                
                <div className="mb-4">
                  {tier.name === "Trial" ? (
                    <div>
                      <span className="text-4xl font-bold text-foreground" data-testid={`text-price-${tier.name.toLowerCase()}`}>
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        for {tier.period}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-foreground" data-testid={`text-price-${tier.name.toLowerCase()}`}>
                        ${isAnnual ? tier.annualPrice?.toFixed(2) : tier.monthlyPrice?.toFixed(2)}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                      {isAnnual && (
                        <div className="text-sm text-green-600 font-semibold mt-1">
                          Save ${((tier.monthlyPrice! * 12) - tier.annualPrice!).toFixed(2)} annually
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start" data-testid={`feature-${tier.name.toLowerCase()}-${featureIndex}`}>
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={cn(
                  "w-full",
                  tier.popular 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                onClick={tier.name === "Trial" ? scrollToHelp : scrollToHelp}
                data-testid={`button-cta-${tier.name.toLowerCase()}`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground" data-testid="text-pricing-note">
            All plans include free setup assistance and 30-day money-back guarantee. 
            Need a custom solution? <button onClick={scrollToHelp} className="text-primary hover:underline">Contact us</button>.
          </p>
        </div>
      </div>
    </section>
  );
}