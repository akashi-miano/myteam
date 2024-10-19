import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002529] py-16 text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div className="wrapper flex items-center gap-24 justify-between lg:justify-start">
            <div className="">
              <a href="" className="logo font-bold text-4xl mb-4 py-2">
                myteam
              </a>
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    href=""
                    className="font-semibold hover:text-[#F67E7E] duration-300"
                  >
                    home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="font-semibold hover:text-[#F67E7E] duration-300"
                  >
                    about
                  </a>
                </li>
              </ul>
            </div>
            <div className="address flex flex-col">
              <span className="font-semibold text-[rgba(255,255,255,.6)]">
                987 Hillcrest Lane
              </span>
              <span className="font-semibold text-[rgba(255,255,255,.6)]">
                Irvine, CA
              </span>
              <span className="font-semibold text-[rgba(255,255,255,.6)]">
                California 92714
              </span>
              <span className="font-semibold text-[rgba(255,255,255,.6)]">
                Call Us : 949-833-7432
              </span>
            </div>
          </div>

          <div className="wrapper flow-content--m lg:justify-self-end flex items-center justify-between lg:block">
            <ul className="socials flex items-center gap-4 lg:mb-4">
              <li className="flex items-center">
                <a href="">
                  <FaFacebookSquare
                    size={25}
                    className="hover:text-[#F67E7E] duration-300"
                  />
                </a>
              </li>
              <li className="flex items-center">
                <a href="">
                  <FaPinterest
                    size={25}
                    className="hover:text-[#F67E7E] duration-300"
                  />
                </a>
              </li>
              <li className="flex items-center">
                <a href="">
                  <FaTwitter
                    size={25}
                    className="hover:text-[#F67E7E] duration-300"
                  />
                </a>
              </li>
            </ul>
            <div className="flex justify-end lg:inline">
              <span className="font-semibold text-[rgba(255,255,255,.6)]">
                Copyright 2020. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
