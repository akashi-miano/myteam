const TeamCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="card">
      <div className="flex flow-content--m items-center gap-4">
        <div className="img-wrapper justify-self-end">
          <img
            src={imgSrc}
            alt={title}
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="team__card">
          <h3 className="text-[#F67E7E] text-[1.125rem]">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
