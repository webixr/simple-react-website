import { useState } from "react";
import logo from "../Assets/logo.png";
import { list } from "postcss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const listsData = [
    {
      title: "Services",
      path: "#Services",
    },
    {
      title: "Portfolio",
      path: "#Portfolio",
    },
    {
      title: "About",
      path: "#About",
    },
    {
      title: "Contact",
      path: "#Contact",
    },
  ];
  return (
    <nav className="w-full h-16 bg-white relative z-50">
      <div className="container mx-auto px-2 w-full h-full flex items-center justify-between">
        {/* logo */}
        <div className="w-fit h-full flex items-center">
          <a href="/#" className="w-14 h-6">
            <img src={logo} className="w-full h-full" />
          </a>
        </div>
        {/* menu */}
        <div className="w-fit h-full flex items-center relative">
          {/* burger */}
          <div
            className="group w-7 h-5 flex flex-col items-end justify-between"
            onClick={() => setMenu(!menu)}
          >
            <span className="block w-full h-0.5 bg-[var(--dark-bg)]"></span>
            <span
              className={`block ${
                menu === true ? "w-full" : "w-2/4"
              } h-0.5 duration-500 bg-[var(--dark-bg)]`}
            ></span>
            <span className="block w-full h-0.5 bg-[var(--dark-bg)]"></span>
          </div>

          {/* list */}
          <ul
            className={`w-52 ${
              menu === true ? "block" : "hidden"
            } h-max absolute top-full right-0 bg-[var(--section-background)]`}
          >
            {listsData.map(({ title, path }, ind) => {
              return (
                <li key={ind}>
                  <a
                    href={`/${path}`}
                    className={`block w-full p-3 hover:pl-5 duration-150 capitalize text-base font-normal border-b ${
                      ind === listsData.length - 1 ? "" : "border-[#ddd]"
                    }`}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
