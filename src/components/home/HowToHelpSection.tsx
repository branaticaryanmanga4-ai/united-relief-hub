import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Handshake, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const HowToHelpSection = () => {
  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial contribution directly funds medical camps, supplies, and life-saving interventions.",
      cta: "Make a Donation",
      link: "/donate",
      highlight: "Every $50 provides medical care for 5 patients",
      color: "primary",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and contribute your time, skills, and passion to our cause.",
      cta: "Sign Up to Volunteer",
      link: "/volunteer",
      highlight: "Flexible schedules, meaningful impact",
      color: "secondary",
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Corporate partnerships and collaborations help us scale our impact and reach more communities.",
      cta: "Become a Partner",
      link: "/partner",
      highlight: "CSR opportunities available",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            How You Can Help
          </h2>
          <p className="text-xl text-muted-foreground">
            There are multiple ways to join our mission and make a lasting difference in people's lives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {ways.map((way, index) => (
            <Card
              key={way.title}
              className={`group border-2 hover:border-${way.color} shadow-md hover:shadow-xl transition-all animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${way.color}/10 text-${way.color} transition-transform group-hover:scale-110`}>
                  <way.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">{way.title}</CardTitle>
                <CardDescription className="text-base">{way.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className={`rounded-lg bg-${way.color}/5 p-4 border border-${way.color}/20`}>
                  <p className={`text-sm font-medium text-${way.color}`}>
                    {way.highlight}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className={`w-full bg-gradient-${way.color}`} asChild>
                  <NavLink to={way.link}>
                    {way.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
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

export default HowToHelpSection;
