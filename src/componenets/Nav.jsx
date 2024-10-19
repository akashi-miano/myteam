const Nav = () => {
  return (
    <nav className="py-8 absolute left-0 right-0 text-white z-[999]">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="logo font-bold text-2xl">
            myteam
          </a>
          <ul className="flex items-center gap-4">
            <li className="flex items-center">
              <a href="">home</a>
            </li>
            <li className="flex items-center">
              <a href="">about</a>
            </li>
          </ul>
        </div>

        <a href="" className="btn btn--primary">
          contact us
        </a>
      </div>
    </nav>
  );
};

export default Nav;
