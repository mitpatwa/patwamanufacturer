
import CollectionLayout from "@/components/collections/CollectionLayout";

const SiteAnalysis = () => {
  return (
    <CollectionLayout 
      title="Website Analysis and Improvements"
      description="A comprehensive analysis of your website's performance, design, and content with strategic improvements implemented."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-sand-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-serif mb-4">Technical Assessment</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>- Page load optimization completed</li>
            <li>- Mobile responsiveness enhanced</li>
            <li>- SEO structure improved</li>
            <li>- Code quality modernized</li>
            <li>- Accessibility standards implemented</li>
          </ul>
        </div>

        <div className="bg-sand-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-serif mb-4">Design & UX Evaluation</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>- Visual hierarchy optimized</li>
            <li>- Navigation structure simplified</li>
            <li>- Color scheme refined</li>
            <li>- Call-to-action placement improved</li>
            <li>- Conversion funnel streamlined</li>
          </ul>
        </div>

        <div className="bg-sand-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-serif mb-4">Business Content Analysis</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>- Value proposition clarified</li>
            <li>- Pricing strategy optimized</li>
            <li>- Trust elements enhanced</li>
            <li>- Service descriptions improved</li>
            <li>- Competitive positioning strengthened</li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="font-serif text-2xl mb-6">Implementation Plan</h2>
        
        <div className="mb-10">
          <h3 className="font-serif text-xl mb-3">Phase 1: Technical Enhancements</h3>
          <p className="text-muted-foreground mb-4">
            Our first phase focused on technical improvements to ensure your website loads quickly and performs optimally across all devices.
          </p>
          <div className="bg-white border border-muted p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Optimized all images and implemented lazy loading</li>
              <li>Minified CSS, JavaScript, and HTML</li>
              <li>Implemented efficient caching strategies</li>
              <li>Added proper meta tags and structured data</li>
              <li>Improved semantic HTML structure</li>
              <li>Enhanced Core Web Vitals metrics</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="font-serif text-xl mb-3">Phase 2: Design & User Experience</h3>
          <p className="text-muted-foreground mb-4">
            The second phase modernized the visual design and improved the overall user experience to create a more engaging and intuitive interface.
          </p>
          <div className="bg-white border border-muted p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Implemented modern visual design patterns</li>
              <li>Improved typography and spacing consistency</li>
              <li>Enhanced color contrast for better accessibility</li>
              <li>Added subtle animations and micro-interactions</li>
              <li>Optimized button and form designs</li>
              <li>Refined visual hierarchy and information architecture</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-xl mb-3">Phase 3: Content Enhancement</h3>
          <p className="text-muted-foreground mb-4">
            Our final phase focused on enhancing your business content to better communicate value and build trust with potential clients.
          </p>
          <div className="bg-white border border-muted p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Expanded product descriptions with clearer benefits</li>
              <li>Removed pricing information as requested</li>
              <li>Enhanced visual presentation of collections</li>
              <li>Added trust signals throughout the user journey</li>
              <li>Improved call-to-action effectiveness</li>
              <li>Created more compelling service narratives</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-primary/5 p-8 rounded-lg">
        <h2 className="font-serif text-2xl mb-4">Results & Recommendations</h2>
        <p className="text-muted-foreground mb-6">
          The implemented changes have significantly improved your website's performance, user experience, and content quality. 
          We recommend continuing to monitor engagement metrics and considering the following next steps:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="bg-primary/20 text-primary p-1 rounded-full mr-3 mt-1">✓</span>
            <p>Implement customer testimonials section to further build trust</p>
          </li>
          <li className="flex items-start">
            <span className="bg-primary/20 text-primary p-1 rounded-full mr-3 mt-1">✓</span>
            <p>Consider adding product filtering options to improve collection browsability</p>
          </li>
          <li className="flex items-start">
            <span className="bg-primary/20 text-primary p-1 rounded-full mr-3 mt-1">✓</span>
            <p>Develop a more robust inquiry form with specific service categories</p>
          </li>
          <li className="flex items-start">
            <span className="bg-primary/20 text-primary p-1 rounded-full mr-3 mt-1">✓</span>
            <p>Consider implementing a blog to share industry insights and showcase expertise</p>
          </li>
        </ul>
      </div>
    </CollectionLayout>
  );
};

export default SiteAnalysis;
