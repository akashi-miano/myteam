import testimonialData from "../data/testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#004047] text-white">
      <div className="container">
        <header className="max-w-[930px] mx-auto mb-8">
          <h2 className="title font-bold text-[3rem] mx-auto">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-[#79C8C6]">success stories.</span>
          </h2>
        </header>
        <div className="cards-wrapper grid md:grid-cols-3 items-center">
          {testimonialData.map(({ desc, witness, role, imgSrc }, idx) => (
            <TestimonialCard
              desc={desc}
              witness={witness}
              role={role}
              imgSrc={imgSrc}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
