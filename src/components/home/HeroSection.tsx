import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Activity } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-health-workers.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-background to-secondary-light">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" fill="currentColor" />
              <span>Saving Lives Together</span>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Every Drop of Blood,
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Every Act of Care</span>, 
              Saves a Life
            </h1>
            
            <p className="text-lg text-muted-foreground sm:text-xl">
              United Relief Network connects communities with essential healthcare services through blood donation camps, 
              medical aid programs, and comprehensive health support initiatives.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-3xl font-bold text-primary">
                  <Users className="h-6 w-6" />
                  <span>15K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Donors</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-3xl font-bold text-secondary">
                  <Activity className="h-6 w-6" />
                  <span>50K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-3xl font-bold text-accent">
                  <Heart className="h-6 w-6" />
                  <span>250+</span>
                </div>
                <p className="text-sm text-muted-foreground">Health Camps</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-gradient-primary text-lg shadow-lg" asChild>
                <NavLink to="/donate">
                  Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <NavLink to="/volunteer">Become a Volunteer</NavLink>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-20 blur-3xl"></div>
            <img
              src={heroImage}
              alt="Healthcare workers and volunteers at United Relief Network medical camp"
              className="relative rounded-3xl shadow-2xl"
            />
            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-4 shadow-lg animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Impact This Year</p>
                  <p className="text-xl font-bold text-foreground">99.9% Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
