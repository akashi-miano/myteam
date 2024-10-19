import teamsData from "../data/teams";
import TeamCard from "./TeamCard";

const Teams = () => {
  return (
    <section className="py-16 bg-[#012F34] text-white">
      <div className="container grid md:grid-cols-2">
        <header className="">
          <h2 className="title text-[3rem] max-w-[450px] font-bold teams__title">
            Build & manage distributed teams like no one else.
          </h2>
        </header>
        <div className="cards-wrapper">
          {teamsData.map(({ imgSrc, title, desc }, idx) => (
            <TeamCard key={idx} imgSrc={imgSrc} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
