import { Button } from "@/components/ui/button";

const Offering = () => {
  const services = [
    {
      title: "Strategic Projects",
      description: "Expert project management and strategic consulting to ensure your initiatives succeed. From digital transformation to operational excellence.",
      features: ["Project Leadership", "Strategic Planning", "Digital Transformation", "Process Optimization"],
      backgroundImage: "/lovable-uploads/add7f079-fc7d-49dc-8e16-f7614860f3e2.png"
    },
    {
      title: "Interim Management",
      description: "Fill critical leadership gaps with experienced interim management. Perfect for building new capabilities or bridging organizational transitions.",
      features: ["Leadership Roles", "Team Building", "Capability Development", "Organizational Design"],
      backgroundImage: "/lovable-uploads/f87dd0c3-de4a-4a43-9783-32e6f8ab7caf.png"
    },
    {
      title: "Startup Advisory",
      description: "Comprehensive support for tech and AI startups. From fundraising to go-to-market strategy, positioning your startup for sustainable growth.",
      features: ["Fundraising Support", "Go-to-Market Strategy", "Business Model Design", "Investor Relations"],
      backgroundImage: "/lovable-uploads/7de7117e-f548-4a60-9312-619b1e1a02a4.png"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="offering" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Services That Drive
            <span className="text-gradient block">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging 15+ years of experience in venture building, strategic consulting, 
            and digital transformation to accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative rounded-3xl p-8 transition-smooth hover:scale-105 cursor-pointer overflow-hidden"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Light overlay to brighten images for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white/40 rounded-3xl transition-smooth group-hover:from-white/30 group-hover:via-white/40 group-hover:to-white/50" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="premium"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="px-12 py-6 text-lg"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Offering;