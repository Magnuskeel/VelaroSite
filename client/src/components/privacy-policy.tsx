export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-privacy-title">
          Privacy Policy
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-data-collection-title">
              Data Collection
            </h3>
            <p className="mb-4">
              Velaro collects minimal data necessary to provide our licensing and portal services. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact information (names, business emails of administrators)</li>
              <li>License details (license keys, subscription IDs)</li>
              <li>Data entered into the Velaro portal interface</li>
              <li>Basic usage analytics to improve service quality</li>
            </ul>
            <p className="mt-4">
              Velaro primarily uses Business Central's existing data and does not collect excessive personal data. 
              No sensitive personal information such as home addresses or social insurance numbers is collected.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-use-data-title">
              Use of Data
            </h3>
            <p className="mb-4">
              Any collected data is used solely for providing and improving the Velaro service:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To verify licenses and enable self-service portal features</li>
              <li>To process payments and manage subscriptions</li>
              <li>To communicate necessary information to customers</li>
              <li>To provide technical support and troubleshooting</li>
            </ul>
            <p className="mt-4">
              Data is not used for unrelated purposes such as advertising. Aggregate usage data may be used 
              internally to improve the product, with no personal identifiers included.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-third-party-title">
              Third-Party Services
            </h3>
            <p className="mb-4">
              Velaro integrates with the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>PayPal:</strong> Payment transactions are handled by PayPal, which receives billing information to process payments. Financial information such as credit card details is not stored by Velaro.</li>
              <li><strong>Microsoft Business Central:</strong> Velaro operates within your existing Business Central environment and accesses necessary data through standard Business Central APIs.</li>
            </ul>
            <p className="mt-4">
              Each third-party service has its own privacy policy governing how they handle your data.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-compliance-title">
              GDPR & CCPA Compliance
            </h3>
            <p>
              Velaro is committed to protecting your privacy rights under GDPR (EU) and CCPA (California, USA). 
              You have the right to access, modify, or delete your personal data. Contact our support team to 
              exercise these rights or for any privacy-related inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
