import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "United Relief Network's blood donation camp saved my father's life during his emergency surgery. Their quick response and organized system made all the difference.",
      author: "Sarah Mitchell",
      role: "Grateful Daughter",
      location: "New York, NY",
    },
    {
      quote: "As a volunteer, I've seen firsthand the incredible impact of their medical camps in underserved communities. They're changing lives every single day.",
      author: "Dr. James Chen",
      role: "Volunteer Physician",
      location: "Los Angeles, CA",
    },
    {
      quote: "The health supplies they provided to our community clinic have enabled us to treat hundreds of patients who otherwise wouldn't have access to basic medical care.",
      author: "Maria Rodriguez",
      role: "Community Health Worker",
      location: "Houston, TX",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Stories of Impact
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from the people whose lives have been touched by our work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="group border-border shadow-md hover:shadow-xl transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/20" />
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
