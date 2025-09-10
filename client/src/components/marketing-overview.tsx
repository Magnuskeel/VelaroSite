import { Zap, CheckCircle, Shield, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Easy Subscription Setup",
    description: "Simplifies onboarding new customers or users with intuitive subscription management — no more manual license handling."
  },
  {
    icon: CheckCircle,
    title: "Offline Licensing Support",
    description: "Allows license activation in offline or firewalled Business Central environments via offline token exchange."
  },
  {
    icon: Shield,
    title: "Secure Activation",
    description: "Ensures only authorized instances can activate and use the extension, using secure license keys and validation."
  },
  {
    icon: CreditCard,
    title: "PayPal Integration",
    description: "Built-in PayPal payment integration for automated subscription payments and renewals with secure checkout experience."
  }
];

export default function MarketingOverview() {
  return (
    <section id="overview" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-overview-title">
            Why Choose Velaro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-overview-description">
            Velaro brings self-service convenience to Microsoft Dynamics 365 Business Central. It combines a customer portal with automated licensing, allowing you to manage subscriptions and activations effortlessly while enhancing user satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-lg p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
                data-testid={`card-benefit-${index}`}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`text-benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
