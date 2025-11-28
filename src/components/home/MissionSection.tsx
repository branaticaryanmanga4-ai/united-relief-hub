import { Heart, Shield, Users, Target } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every decision we make is guided by empathy and the desire to alleviate suffering.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Full accountability in our operations and finances builds trust with our community.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We empower local communities to take charge of their own health outcomes.",
    },
    {
      icon: Target,
      title: "Measurable Impact",
      description: "Data-driven approach ensures every dollar and effort creates maximum positive change.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground">
            To provide accessible, life-saving healthcare services to underserved communities through 
            blood donation programs, medical aid, and comprehensive health support initiatives.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
