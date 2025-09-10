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
    id: "activate",
    question: "How to Activate a License",
    answer: (
      <div className="text-muted-foreground space-y-3">
        <p>After installing Velaro, follow these steps to activate your license:</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Open the Velaro extension setup page in Business Central</li>
          <li>Enter the license key provided when you purchased Velaro</li>
          <li>If online activation is supported, you can sign in to retrieve a license automatically</li>
          <li>Click <strong>Activate</strong></li>
          <li>The extension will validate the license and confirm activation</li>
        </ol>
      </div>
    )
  },
  {
    id: "offline",
    question: "How to Use Offline Tokens (Offline Activation)",
    answer: (
      <div className="text-muted-foreground space-y-3">
        <p>If your Business Central environment has no internet connectivity, Velaro supports offline activation via tokens:</p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>In the Velaro setup page, click <strong>Generate Offline Token</strong></li>
          <li>This produces a unique code representing your environment and license request</li>
          <li>Using an internet-connected device, go to the Velaro offline activation page</li>
          <li>Enter the token and your license information</li>
          <li>Generate an activation response token</li>
          <li>Return to your Business Central environment and enter the response token</li>
          <li>Complete the offline activation process</li>
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
          <li>Review the setup guide and troubleshooting tips in your license portal</li>
          <li>Contact our support team with your license information for personalized assistance</li>
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
