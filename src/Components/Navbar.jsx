import { useState } from "react";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
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
            <span className="block w-full h-0.5 bg-black"></span>
            <span className={`block ${menu === true ? "w-full" : "w-2/4"} h-0.5 duration-500 bg-black`}></span>
            <span className="block w-full h-0.5 bg-black"></span>
          </div>

          {/* list */}        
          <ul className={`w-52 ${menu === true ? "block" : "hidden"} h-max absolute top-full right-0 bg-[#f6f6f6]`}>
            <li><a href="/#Services" className="block w-full p-3 hover:pl-5 duration-150 capitalize text-base font-normal border-b border-[#ddd]">services</a></li>
            <li><a href="/#Portfolio" className="block w-full p-3 hover:pl-5 duration-150 capitalize text-base font-normal border-b border-[#ddd]">portfolio</a></li>
            <li><a href="/#About" className="block w-full p-3 hover:pl-5 duration-150 capitalize text-base font-normal border-b border-[#ddd]">about me</a></li>
            <li><a href="/#Contact" className="block w-full p-3 hover:pl-5 duration-150 capitalize text-base font-normal">contact me</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
