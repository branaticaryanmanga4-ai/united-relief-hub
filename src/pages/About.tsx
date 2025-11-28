import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                About United Relief Network
              </h1>
              <p className="text-xl text-white/90">
                Building healthier communities through compassion, transparency, and action since 2015
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-center mb-12">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground text-lg">
                  United Relief Network was founded in 2015 by a group of healthcare professionals 
                  who witnessed firsthand the devastating impact of inadequate healthcare access in 
                  underserved communities. What began as a small blood donation drive has grown into 
                  a comprehensive health support organization serving thousands across the region.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our journey started when Dr. Sarah Mitchell organized the first community blood donation 
                  camp after a critical shortage affected local hospitals. The overwhelming community 
                  response showed us the power of organized, transparent relief efforts. Today, we've 
                  expanded to include medical camps, health supplies distribution, and emergency response 
                  programs.
                </p>
                <p className="text-muted-foreground text-lg">
                  Every day, we work tirelessly to bridge the gap between healthcare resources and those 
                  who need them most. Through partnerships with hospitals, community organizations, and 
                  dedicated volunteers, we're building a network of care that reaches even the most 
                  remote areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-center mb-12">
              What Drives Us
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: "Compassion",
                  description: "Every action is guided by genuine care for human life and dignity"
                },
                {
                  icon: Target,
                  title: "Impact",
                  description: "We measure success by lives saved and communities strengthened"
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Working together with communities, not for them"
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Maintaining highest standards in healthcare delivery and operations"
                }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Our Growth Journey
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {[
                  { value: "2015", label: "Founded" },
                  { value: "500+", label: "Volunteers" },
                  { value: "50+", label: "Partner Hospitals" },
                  { value: "20+", label: "Countries Reached" }
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;