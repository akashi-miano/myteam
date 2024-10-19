import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002529] py-16 text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div className="wrapper flex items-center gap-24">
            <div className="">
              <a href="" className="logo font-bold text-4xl mb-4 py-2">
                myteam
              </a>
              <ul className="flex items-center gap-4">
                <li>
                  <a href="" className="font-semibold">
                    home
                  </a>
                </li>
                <li>
                  <a href="" className="font-semibold">
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

          <div className="wrapper flow-content--m justify-self-end">
            <ul className="socials flex items-center gap-4 ">
              <li>
                <a href="">
                  <FaFacebookSquare size={25} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaPinterest size={25} />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter size={25} />
                </a>
              </li>
            </ul>
            <div className="">
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
