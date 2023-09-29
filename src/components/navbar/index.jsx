import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// All the icons here
// import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
// import { CgProfile } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import { useDarkMode } from "../../context/darkmode";

export default function NavigationBar() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className="flex items-center md:gap-5 gap-1 pb-5">
      {/* <RxHamburgerMenu className="md:text-3xl text-5xl cursor-pointer" /> */}
      <nav>
        <Link to="/" className="flex items-center gap-2">
          <BsYoutube className="text-3xl text-primary-Logo" />
          <h1 className="text-3xl text-primary-Logo">YouTube</h1>
        </Link>
      </nav>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
          className="border border-accessory-search rounded-xl text-black w-full py-1 px-1"
        />
      </form>
      <GoSearch className="md:text-3xl text-5xl" />
      <button
        onClick={toggleDarkMode}
        className="text-4xl bg-transparent cursor-pointer border-none ml-5"
      >
        {!darkMode && <HiMoon />}{" "}
        {darkMode && <BsSun className="text-white pt-1 pb-0 px-0" />}
      </button>
      {/* <CgProfile className="text-3xl text-accessory-profile" /> */}
    </header>
  );
}
