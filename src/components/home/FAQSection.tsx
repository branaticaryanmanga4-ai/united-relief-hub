import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I donate blood through your organization?",
      answer: "You can register for our blood donation camps through our Events section or contact us directly. We host regular camps across multiple cities and also coordinate emergency blood donations. All donors are screened for eligibility and safety before donation."
    },
    {
      question: "Where do my donations go?",
      answer: "100% of your monetary donations go directly to our programs: blood donation camps, medical supplies, and health services. We maintain complete transparency with quarterly financial reports available on our website. Our operating costs are covered separately through grants and corporate partnerships."
    },
    {
      question: "Can I volunteer if I don't have medical experience?",
      answer: "Absolutely! We need volunteers for various roles including event coordination, outreach, administrative support, and awareness campaigns. Medical volunteers are valuable, but non-medical volunteers are equally important to our mission. We provide training for all volunteer positions."
    },
    {
      question: "How do you select communities for your medical camps?",
      answer: "We prioritize underserved areas with limited healthcare access, working closely with local community leaders and health officials. Our selection process considers factors like distance from medical facilities, population health indicators, and community requests. We aim to reach the most vulnerable populations first."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "Yes, United Relief Network is a registered 501(c)(3) nonprofit organization (in the US) and registered under Section 80G in India. All donations are tax-deductible to the extent allowed by law. You'll receive a donation receipt for tax purposes within 48 hours of your contribution."
    },
    {
      question: "How can my company partner with United Relief Network?",
      answer: "We offer several corporate partnership opportunities including: sponsoring medical camps, employee volunteer programs, matching gift programs, and CSR initiatives. Contact our partnerships team at partners@unitedreliefnetwork.org to discuss custom engagement options that align with your corporate values."
    },
    {
      question: "Do you provide emergency medical services?",
      answer: "While we don't operate as an emergency response service, we do coordinate rapid relief efforts during health crises and natural disasters. This includes deploying medical supplies, coordinating blood donations for emergencies, and setting up temporary health camps in affected areas."
    },
    {
      question: "How do I know my donation is making an impact?",
      answer: "We provide regular impact updates to all donors, including quarterly reports with specific metrics on lives impacted. You can also visit our Impact Stories page to see real testimonials from beneficiaries. Donors who contribute $100+ receive personalized impact reports twice annually."
    },
    {
      question: "Can I donate medical supplies or equipment?",
      answer: "Yes! We accept donations of new, unused medical supplies and equipment. Please contact our supply coordinator at supplies@unitedreliefnetwork.org with details about what you'd like to donate. We can arrange pickup for large equipment donations and provide documentation for tax purposes."
    },
    {
      question: "How often do you organize blood donation camps?",
      answer: "We organize 50-60 blood donation camps annually across different cities. Regular camps are held monthly in major cities, with additional special camps during emergencies or community events. Sign up for our newsletter to receive notifications about upcoming camps in your area."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our programs and how to get involved
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl bg-card px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions */}
          <div className="text-center space-y-4 pt-8">
            <h3 className="text-xl font-semibold text-foreground">
              Still have questions?
            </h3>
            <p className="text-muted-foreground">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;