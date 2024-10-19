import { quote } from "../assets";

const TestimonialCard = ({ desc, witness, role, imgSrc }) => {
  return (
    <div className="flow-content--m text-center relative z-[1] p-4">
      <p className="max-w-[350px] mx-auto">{desc}</p>
      <div className="flex flex-col">
        <span className="text-[#79C8C7] font-bold">{witness}</span>
        <span>{role}</span>
      </div>
      <div className="img-wrapper flex justify-center">
        <img
          src={imgSrc}
          alt={witness}
          className="h-[62px] w-[62px] rounded-full border-2 border-[#C4FFFE]"
        />
      </div>
      <div className="img-wrapper ">
        <img
          src={quote}
          alt=""
          className="h-[56px] w-[67px] absolute top-0 translate-x-[-50%] left-1/2 z-[-1]"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
