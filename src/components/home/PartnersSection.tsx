import { Handshake } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    { name: "Global Health Alliance", type: "NGO Partner" },
    { name: "MediCare Foundation", type: "Healthcare Partner" },
    { name: "TechCorp Solutions", type: "Corporate Sponsor" },
    { name: "City General Hospital", type: "Medical Partner" },
    { name: "BloodBank Network", type: "Supply Partner" },
    { name: "Community Health Initiative", type: "NGO Partner" },
  ];

  const supporters = [
    "Dr. Reddy's Foundation",
    "Apollo Hospitals",
    "Cipla Foundation",
    "Max Healthcare",
    "Fortis Foundation",
    "Sun Pharma Foundation",
    "Manipal Hospitals",
    "AIIMS Alumni Network"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto">
              <Handshake className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Our Partners & Supporters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Together, we're building a stronger healthcare network for communities in need
            </p>
          </div>

          {/* Key Partners */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground text-center">
              Strategic Partners
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-20 flex items-center justify-center mb-4 bg-muted/50 rounded-lg group-hover:bg-primary/5 transition-colors">
                    <div className="text-2xl font-bold text-muted-foreground/40">
                      {partner.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {partner.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Organizations */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground text-center">
              Supporting Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {supporters.map((supporter, index) => (
                <div
                  key={supporter}
                  className="p-4 text-center rounded-lg border border-border bg-card hover:border-primary/50 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <p className="text-sm font-medium text-muted-foreground">
                    {supporter}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Partner CTA */}
          <div className="text-center space-y-6 pt-8">
            <div className="p-8 rounded-2xl bg-gradient-primary border border-primary/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Become a Partner
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join our network of organizations committed to improving healthcare access. 
                Together, we can create lasting impact.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;