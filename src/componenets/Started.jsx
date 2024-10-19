import { startedDecor } from "../assets";

const Started = () => {
  return (
    <section className="py-24 lg:py-16 bg-[#F67E7E] text-[#012F34] relative overflow-y-hidden">
      <div className="container flex justify-between items-center">
        <header>
          <h2 className="title lg:text-[3rem] text-[2rem] font-bold">
            Ready to get started?
          </h2>
        </header>
        <div className="">
          <a href="" className="btn btn--secondary ">
            contact us
          </a>
        </div>
      </div>
      <div className="img-wrapper">
        <img
          src={startedDecor}
          alt=""
          className="absolute lg:bottom-0 left-0 w-[150px] h-[150px] lg:w-[200px] lg:h-[144px] translate-y-[-15%] lg:translate-y-0"
        />
      </div>
    </section>
  );
};

export default Started;
