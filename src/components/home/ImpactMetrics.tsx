import { useEffect, useRef, useState } from "react";
import { Droplet, Users, Heart, Package } from "lucide-react";

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: Droplet,
      value: 15240,
      label: "Blood Donors",
      suffix: "+",
      color: "primary",
    },
    {
      icon: Users,
      value: 52000,
      label: "Patients Supported",
      suffix: "+",
      color: "secondary",
    },
    {
      icon: Package,
      value: 250000,
      label: "Medical Supplies Delivered",
      suffix: "+",
      color: "accent",
    },
    {
      icon: Heart,
      value: 1200,
      label: "Medical Camps Organized",
      suffix: "+",
      color: "primary",
    },
  ];

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(startValue + (end - startValue) * easeOutQuart));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent metrics showing the real difference we're making in communities worldwide.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`group rounded-2xl border border-border bg-card p-8 text-center shadow-md transition-all hover:shadow-xl hover:border-${metric.color}/50 ${
                isVisible ? "animate-counter-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-${metric.color}/10 text-${metric.color} transition-transform group-hover:scale-110`}>
                <metric.icon className="h-8 w-8" />
              </div>
              <div className={`mb-2 text-4xl font-bold text-${metric.color}`}>
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            *All metrics updated as of {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
