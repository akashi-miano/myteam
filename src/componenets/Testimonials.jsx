import testimonialData from "../data/testimonialData";
import TestimonialCard from "./TestimonialCard";
import { testimonialsDecor1, testimonialsDecor2 } from "../assets";

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#004047] text-white relative">
      <div className="container">
        <header className="max-w-[930px] mx-auto mb-8 mt-8 lg:mt-0">
          <h2 className="title font-bold text-[2rem] lg:text-[3rem] mx-auto text-center max-w-[450px] lg:text-left lg:max-w-full lg:indent-24">
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
      <div className="img-wrapper">
        <img
          src={testimonialsDecor1}
          alt=""
          className="absolute top-0 left-0"
        />
        <img
          src={testimonialsDecor2}
          alt=""
          className="absolute bottom-0 right-0"
        />
      </div>
    </section>
  );
};

export default Testimonials;
