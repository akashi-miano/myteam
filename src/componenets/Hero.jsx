import { circle1, circle2 } from "../assets";

const Hero = () => {
  return (
    <section className="bg-[#014E56] text-white h-screen relative overflow-y-hidden">
      <div className="container flex flex-col justify-center lg:grid lg:grid-cols-2 items-center gap-4 h-full">
        <header className="text-center lg:text-left">
          <h1 className="text-[6.25rem] font-bold max-w-[550px] mx-auto">
            Find the best <span className="special">talent</span>
          </h1>
        </header>
        <div className="">
          <p className="font-semibold max-w-[450px] hero__desc mx-auto lg:mx-0 text-center lg:text-left">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
      <div className="img-wrapper">
        <img
          src={circle1}
          alt=""
          className="absolute w-[358px] h-[200px] bottom-0 lg:right-0 translate-y-[25%] translate-x-1/2"
        />
        <img
          src={circle2}
          alt=""
          className="md:absolute top-1/2 translate-y-[-50%]"
        />
      </div>
    </section>
  );
};

export default Hero;
