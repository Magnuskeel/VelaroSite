import { Zap, CheckCircle, Shield, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Easy Customer Onboarding",
    description: "Simplifies onboarding new customers and vendors with intuitive portal setup and user management."
  },
  {
    icon: CheckCircle,
    title: "Flexible Access Control",
    description: "Provides robust access control features to manage what information and services each portal user can access."
  },
  {
    icon: Shield,
    title: "Secure Portal Access",
    description: "Ensures only authorized users can access the portal with secure authentication and role-based permissions."
  },
  {
    icon: CreditCard,
    title: "Integrated Payments",
    description: "Built-in payment integration allowing customers to make payments directly through the portal with secure checkout."
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
            Velaro brings self-service convenience to Microsoft Dynamics 365 Business Central. It provides customers and vendors with secure portal access to information and services, streamlining business interactions while enhancing user satisfaction.
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
