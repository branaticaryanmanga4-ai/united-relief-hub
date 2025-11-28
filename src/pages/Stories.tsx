import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Heart } from "lucide-react";

const Stories = () => {
  const stories = [
    {
      title: "A Second Chance at Life",
      category: "Blood Donation",
      location: "Mumbai, India",
      date: "March 2024",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=500&fit=crop",
      excerpt: "When 8-year-old Aisha was diagnosed with acute leukemia, her family faced an impossible challenge. Through our blood donation network, we mobilized 50+ donors in 48 hours.",
      impact: "12 units of blood donated, life saved",
      testimonial: "United Relief Network didn't just save my daughter's life—they gave our entire family hope when we had none left.",
      author: "Fatima Hassan, Mother"
    },
    {
      title: "Rural Village Transforms Health Outcomes",
      category: "Medical Camp",
      location: "Rajasthan, India",
      date: "January 2024",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=500&fit=crop",
      excerpt: "Sardarpur village hadn't seen a doctor in 3 years. Our medical camp brought comprehensive healthcare screening to 850 residents in one weekend.",
      impact: "850 patients screened, 120 critical cases identified",
      testimonial: "For the first time, we could get our children vaccinated and elderly checked without traveling 100 kilometers. This changed everything.",
      author: "Ramesh Patel, Village Elder"
    },
    {
      title: "Emergency Relief After Floods",
      category: "Health Supplies",
      location: "Kerala, India",
      date: "August 2023",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=500&fit=crop",
      excerpt: "When devastating floods hit Kerala, we deployed emergency medical supplies and volunteers within 24 hours, reaching 15 affected villages.",
      impact: "5,000 medical kits distributed, 2,000 families supported",
      testimonial: "While we lost our homes, we didn't lose hope. The medical supplies and support kept our community healthy during the crisis.",
      author: "Lakshmi Nair, Community Leader"
    },
    {
      title: "Fighting Maternal Mortality",
      category: "Medical Camp",
      location: "Uttar Pradesh, India",
      date: "November 2023",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=500&fit=crop",
      excerpt: "Our prenatal care camps in rural UP have screened 2,000+ expecting mothers, providing vital supplements and education on safe delivery practices.",
      impact: "2,000+ mothers screened, 15 high-risk pregnancies identified",
      testimonial: "I learned about proper nutrition and warning signs. When complications arose, I knew to seek help immediately. My baby is healthy because of this program.",
      author: "Priya Sharma, New Mother"
    },
    {
      title: "Diabetes Awareness Saves Lives",
      category: "Community Health",
      location: "Gujarat, India",
      date: "September 2023",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      excerpt: "Our diabetes screening and awareness program in Gujarat communities has identified 300+ undiagnosed cases, providing education and connecting patients to ongoing care.",
      impact: "1,500 people screened, 300 cases identified and treated",
      testimonial: "I had no idea I was diabetic. The free screening detected it early, and now I'm managing it well with their guidance and medication support.",
      author: "Vijay Kumar, Patient"
    },
    {
      title: "Clean Water, Healthy Communities",
      category: "Health Supplies",
      location: "Bihar, India",
      date: "June 2023",
      image: "https://images.unsplash.com/photo-1590556409454-4c3e1ce55dab?w=800&h=500&fit=crop",
      excerpt: "Contaminated water was causing recurring illness in rural Bihar. We installed 20 water filtration systems and distributed hygiene kits to 500 families.",
      impact: "20 filtration systems installed, 500 families reached",
      testimonial: "Our children were constantly sick from water-borne diseases. Since the new water system, hospital visits have dropped by 80%.",
      author: "Meena Devi, Parent"
    }
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
                Impact Stories
              </h1>
              <p className="text-xl text-white/90">
                Real lives transformed through compassionate healthcare and community support
              </p>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {stories.map((story, index) => (
                <article
                  key={story.title}
                  className="grid lg:grid-cols-2 gap-8 items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {story.category}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">
                      {story.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {story.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {story.date}
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {story.excerpt}
                    </p>
                    <div className="p-4 rounded-lg bg-accent/50 border-l-4 border-primary">
                      <div className="flex items-start gap-2 mb-2">
                        <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="font-semibold text-foreground">{story.impact}</p>
                      </div>
                    </div>
                    <blockquote className="border-l-4 border-border pl-4 py-2 space-y-2">
                      <p className="text-muted-foreground italic">
                        "{story.testimonial}"
                      </p>
                      <footer className="text-sm font-medium text-foreground">
                        — {story.author}
                      </footer>
                    </blockquote>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Be Part of the Next Story
              </h2>
              <p className="text-lg text-muted-foreground">
                Every contribution, every volunteer hour, every donation creates a new story of hope and healing.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/#help"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Get Involved
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

export default Stories;