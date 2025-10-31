import SectionHeading from "@/components/Ui/SectionHeading";
import TestimonialsSlider from "@/components/Ui/TestimonialsSlider";
import getAllTestimonials from "@/lib/Testimonials/getAllTestimonials";

const Testimonials = async () => {

  /* ------------------Get Testimonials Data------------------- */
  const testimonials = await getAllTestimonials();

  return (
    /* ------------------Testimonials Section------------------ */
    <section className="section sectionPadding">

      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='Testimonials' title=<>Stories From Satisfied <br /> Clients</> description='Read what clients and collaborators say about my work, commitment, professionalism, and the results achieved together.'></SectionHeading>

      {/* -------------Testimonials-Slider---------------- */}
      <TestimonialsSlider testimonials={testimonials}></TestimonialsSlider>

    </section>
  );
};

export default Testimonials;