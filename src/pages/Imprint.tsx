const Imprint = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <a 
            href="/" 
            className="text-accent hover:text-accent/80 transition-smooth"
          >
            ← Back to Home
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-8">Imprint</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>Information according to § 5 TMG</h2>
          
          <p>
            <strong>Marco Krebs Consulting</strong><br />
            Marco Krebs<br />
            [Address Line 1]<br />
            [Address Line 2]<br />
            [City, Postal Code]<br />
            Germany
          </p>

          <h3>Contact</h3>
          <p>
            Email: info@marcokrebs-consulting.de<br />
            Website: www.marcokrebs-consulting.de
          </p>

          <h3>Responsible for content according to § 55 Abs. 2 RStV</h3>
          <p>
            Marco Krebs<br />
            [Same address as above]
          </p>

          <h3>Disclaimer</h3>
          
          <h4>Liability for Contents</h4>
          <p>
            As service providers, we are liable for own contents of these websites according to Sec. 7, 
            paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia 
            Act (TMG), service providers are not under obligation to permanently monitor submitted or 
            stored information or to search for evidences that indicate illegal activities.
          </p>

          <h4>Liability for Links</h4>
          <p>
            Our offer includes links to external third party websites. We have no influence on the 
            contents of those websites, therefore we cannot guarantee for those contents. Providers 
            or administrators of linked websites are always responsible for their own contents.
          </p>

          <h4>Copyright</h4>
          <p>
            Contents and compilations published on these websites by the providers are subject to 
            German copyright laws. Reproduction, editing, distribution as well as the use of any kind 
            outside the scope of the copyright law require a written permission of the author or originator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imprint;