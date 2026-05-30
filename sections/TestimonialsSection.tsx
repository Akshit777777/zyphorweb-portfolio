import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="section-shell">
        {/* Testimonials carousel section */}
        <SectionHeader
          eyebrow="Testimonials"
          title="Premium feedback from launch-minded clients."
          description="Elegant cards slide softly through real-world style feedback for the kind of ZyphorWeb experience this site is designed to sell."
        />
        <div className="mt-14">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}
