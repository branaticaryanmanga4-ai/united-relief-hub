import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Stethoscope, Package, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import bloodDonation from "@/assets/blood-donation.jpg";
import medicalCamp from "@/assets/medical-camp.jpg";
import healthSupplies from "@/assets/health-supplies.jpg";

const InitiativesSection = () => {
  const initiatives = [
    {
      icon: Droplet,
      title: "Blood Donation Camps",
      description: "Organizing regular blood donation drives in communities to maintain a reliable supply for emergency medical needs and surgeries.",
      image: bloodDonation,
      stats: "1,200+ camps organized annually",
      color: "primary",
    },
    {
      icon: Stethoscope,
      title: "Medical Aid Programs",
      description: "Free health checkups, consultations, and treatments in underserved areas through mobile medical units and temporary clinics.",
      image: medicalCamp,
      stats: "50,000+ patients served yearly",
      color: "secondary",
    },
    {
      icon: Package,
      title: "Health Supplies Distribution",
      description: "Providing essential medicines, first aid kits, and medical equipment to communities lacking access to healthcare resources.",
      image: healthSupplies,
      stats: "250,000+ supplies delivered",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Current Initiatives
          </h2>
          <p className="text-xl text-muted-foreground">
            Three core programs working together to create healthier, more resilient communities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <Card
              key={initiative.title}
              className="group overflow-hidden border-border shadow-md hover:shadow-xl transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className={`absolute top-4 right-4 rounded-full bg-${initiative.color}/90 p-3 shadow-lg`}>
                  <initiative.icon className="h-6 w-6 text-background" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{initiative.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{initiative.description}</p>
                <div className={`inline-flex items-center rounded-full bg-${initiative.color}/10 px-4 py-2 text-sm font-medium text-${initiative.color}`}>
                  {initiative.stats}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" className="w-full group/btn" asChild>
                  <NavLink to="/initiatives">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </NavLink>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
