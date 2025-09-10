import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqData = [
  {
    id: "install",
    question: "How to Install the Velaro Extension",
    answer: (
      <div className="text-muted-foreground space-y-3">
        <p>You can install Velaro by downloading it from Microsoft AppSource or by importing the .app file into your Business Central environment.</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>In Business Central's Extension Management, choose <strong>Upload Extension</strong> if installing manually</li>
          <li>Follow the prompts to upload the Velaro .app file</li>
          <li>Once installed, assign the appropriate user permissions</li>
          <li>Navigate to the Velaro setup page to begin configuration</li>
        </ol>
      </div>
    )
  },
  {
    id: "setup",
    question: "How to Set Up the Customer Portal",
    answer: (
      <div className="text-muted-foreground space-y-3">
        <p>After installing Velaro, follow these steps to configure your customer and vendor portal:</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Open the Velaro extension setup page in Business Central</li>
          <li>Configure portal settings and branding options</li>
          <li>Set up user roles and permissions for portal access</li>
          <li>Define what information and services customers/vendors can access</li>
          <li>Test the portal configuration with a sample user account</li>
        </ol>
      </div>
    )
  },
  {
    id: "users",
    question: "How to Manage Portal Users and Access",
    answer: (
      <div className="text-muted-foreground space-y-3">
        <p>Velaro provides flexible access control to manage who can access your portal and what they can see:</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>In the Velaro user management section, create portal user accounts</li>
          <li>Assign appropriate roles (Customer, Vendor, or custom roles)</li>
          <li>Configure permissions for each role to control access to specific information</li>
          <li>Set up authentication methods for secure portal access</li>
          <li>Monitor user activity and adjust permissions as needed</li>
          <li>Provide users with their portal login credentials and access instructions</li>
        </ol>
      </div>
    )
  },
  {
    id: "support",
    question: "How to Get Support",
    answer: (
      <div className="text-muted-foreground space-y-3">
        <p>If you need additional help with Velaro, here are your support options:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Check the built-in help documentation within the Velaro extension</li>
          <li>Review the setup guide and troubleshooting tips in your admin portal</li>
          <li>Contact our support team with your configuration details for personalized assistance</li>
          <li>Visit our knowledge base for additional resources and updates</li>
        </ul>
      </div>
    )
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleFaq = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="help" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-faq-title">
            Help & FAQ
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-faq-subtitle">
            Common questions about installing and using Velaro
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="bg-card rounded-lg border border-border overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted transition-colors" 
                onClick={() => toggleFaq(faq.id)}
                data-testid={`button-faq-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-200",
                    openItems[faq.id] && "rotate-180"
                  )} 
                />
              </button>
              {openItems[faq.id] && (
                <div className="px-6 pb-4" data-testid={`content-faq-${faq.id}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
