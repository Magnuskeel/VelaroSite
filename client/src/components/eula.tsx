export default function EULA() {
  return (
    <section id="eula" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-eula-title">
          End User License Agreement
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-license-grant-title">
              License Grant
            </h3>
            <p>
              Subject to the terms of this agreement, Velaro grants you a non-exclusive, non-transferable license 
              to use the Velaro extension within your Microsoft Dynamics 365 Business Central environment. This 
              license is valid for the subscription period and number of users specified in your purchase.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-permitted-use-title">
              Permitted Use
            </h3>
            <p className="mb-4">You may:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Install and use Velaro in your licensed Business Central environment</li>
              <li>Configure the extension according to your business needs</li>
              <li>Access support and updates during your subscription period</li>
              <li>Use the self-service portal features for your authorized users</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-restrictions-title">
              Restrictions
            </h3>
            <p className="mb-4">You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Redistribute or resell the extension without authorization</li>
              <li>Use the software beyond the scope of your license</li>
              <li>Remove or modify any proprietary notices or labels</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-support-updates-title">
              Support and Updates
            </h3>
            <p>
              Active subscribers receive technical support and software updates during their subscription period. 
              Support is provided through our standard channels and is subject to our support policies. Updates 
              may include bug fixes, security patches, and new features.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-liability-title">
              Limitation of Liability
            </h3>
            <p>
              To the maximum extent permitted by law, Velaro shall not be liable for any indirect, incidental, 
              special, or consequential damages arising from the use of this software. Our total liability shall 
              not exceed the amount paid for the software license.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-termination-title">
              Termination
            </h3>
            <p>
              This license remains in effect until terminated. We may terminate this license if you fail to 
              comply with its terms. Upon termination, you must cease all use of the software and destroy all 
              copies in your possession.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
