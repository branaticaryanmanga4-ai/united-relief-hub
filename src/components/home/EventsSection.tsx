import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Community Blood Donation Drive",
      date: "December 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Central Community Center, New York",
      attendees: "150+ registered",
      type: "Blood Donation",
    },
    {
      title: "Free Health Screening Camp",
      date: "December 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Riverside Medical Facility, Los Angeles",
      attendees: "200+ registered",
      type: "Medical Camp",
    },
    {
      title: "Volunteer Training Workshop",
      date: "January 5, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "URN Headquarters, Chicago",
      attendees: "75+ registered",
      type: "Training",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Calendar className="h-4 w-4" />
            <span>Upcoming Events</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Join Our Next Event
          </h2>
          <p className="text-xl text-muted-foreground">
            Participate in our community events and be part of the change.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {upcomingEvents.map((event, index) => (
            <Card
              key={event.title}
              className="group border-border shadow-md hover:shadow-xl transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="mb-2">
                  <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                    {event.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Calendar className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{event.date}</p>
                    <p>{event.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <p>{event.location}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-accent">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees}</span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="outline" className="w-full group/btn" asChild>
                  <NavLink to="/events">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </NavLink>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <NavLink to="/events">
              View Full Calendar
              <Calendar className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
