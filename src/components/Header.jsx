import React from 'react'
import Logo from "../assets/Icons/ChefClaudeIcon.svg";
function Header() {
  return (
    <header className="flex justify-center items-center  font-spartan p-4 gap-2.5 shadow-sm ">
      <img className="w-8` h-10" src={Logo} alt="Chef Claude logo" />
      <h1 className=" text-center mt-3 text-[2rem] font-light">Chef Claude</h1>
    </header>
  );
}

export default Header