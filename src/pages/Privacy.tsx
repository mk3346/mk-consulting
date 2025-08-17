const Privacy = () => {
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

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground">Last updated: January 2025</p>

          <h2>1. Data Protection at a Glance</h2>
          
          <h3>General Information</h3>
          <p>
            The following information provides a simple overview of what happens to your personal 
            data when you visit this website. Personal data is any data that can be used to 
            identify you personally.
          </p>

          <h3>Data Collection on this Website</h3>
          <h4>Who is responsible for data collection on this website?</h4>
          <p>
            Data processing on this website is carried out by the website operator. You can find 
            the operator's contact details in the "Contact Information" section of this privacy policy.
          </p>

          <h4>How do we collect your data?</h4>
          <p>
            Your data is collected in various ways. On the one hand, this is data that you provide 
            to us yourself (e.g., data you enter in a contact form). Other data is automatically 
            collected by our IT systems when you visit the website.
          </p>

          <h2>2. General Information and Mandatory Information</h2>
          
          <h3>Data Protection</h3>
          <p>
            The operators of these pages take the protection of your personal data very seriously. 
            We treat your personal data confidentially and in accordance with the statutory data 
            protection regulations and this privacy policy.
          </p>

          <h3>Contact Information</h3>
          <p>
            If you have questions about data protection, please contact us:<br />
            Email: info@marcokrebs-consulting.de
          </p>

          <h2>3. Data Collection on this Website</h2>
          
          <h3>Contact Form</h3>
          <p>
            If you send us inquiries via the contact form, your details from the inquiry form, 
            including the contact data you provide there, will be stored by us for the purpose 
            of processing the inquiry and in case of follow-up questions.
          </p>

          <h3>Server Log Files</h3>
          <p>
            The website provider automatically collects and stores information in so-called server 
            log files, which your browser automatically transmits to us. These are:
          </p>
          <ul>
            <li>Browser type and browser version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Host name of the accessing computer</li>
            <li>Time of the server request</li>
            <li>IP address</li>
          </ul>

          <h2>4. Your Rights</h2>
          <p>
            You have the right to receive information about the origin, recipient and purpose of 
            your stored personal data free of charge at any time. You also have the right to 
            request the correction, blocking or deletion of this data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;