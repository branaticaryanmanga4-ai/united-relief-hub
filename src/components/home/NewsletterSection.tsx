import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our community. You'll receive updates about our work and impact.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-2xl text-center space-y-6 animate-fade-in">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            Stay Connected
          </h2>
          
          <p className="text-lg text-primary-foreground/90">
            Subscribe to our newsletter for updates on our initiatives, success stories, and ways you can help make a difference.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 pt-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white/40"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
