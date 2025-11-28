import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & Executive Director",
      bio: "Healthcare visionary with 20+ years in emergency medicine and community health",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      bio: "Former hospital administrator specializing in logistics and supply chain management",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Medical Director",
      bio: "Public health expert with focus on preventive care and community outreach",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
    },
    {
      name: "James Rodriguez",
      role: "Head of Volunteer Services",
      bio: "Community organizer dedicated to empowering volunteers and building networks",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  const board = [
    { name: "Patricia Williams", role: "Board Chair", expertise: "Healthcare Policy" },
    { name: "David Kim", role: "Treasurer", expertise: "Finance & Audit" },
    { name: "Dr. Amara Okafor", role: "Board Member", expertise: "Global Health" },
    { name: "Robert Thompson", role: "Board Member", expertise: "Legal & Compliance" },
    { name: "Lisa Martinez", role: "Board Member", expertise: "Corporate Partnerships" },
    { name: "Dr. Yuki Tanaka", role: "Board Member", expertise: "Research & Innovation" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Meet Our Team
              </h1>
              <p className="text-xl text-white/90">
                Dedicated professionals united by a passion for healthcare equity
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-center mb-12">
                Leadership Team
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {leadership.map((member, index) => (
                  <div
                    key={member.name}
                    className="group space-y-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm font-medium text-primary">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                      <div className="flex gap-3 pt-2">
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-center mb-12">
                Board of Directors
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {board.map((member, index) => (
                  <div
                    key={member.name}
                    className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Join Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                We're always looking for passionate individuals who share our mission. 
                Whether you want to volunteer, partner, or join our staff, there's a place for you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="/#volunteer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-border bg-background text-foreground font-medium hover:bg-accent transition-colors"
                >
                  Volunteer With Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;