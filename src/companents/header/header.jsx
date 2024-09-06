import React, { useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex items-center  gap-[69px] justify-between mt-5">
          <Link to={"/"}>
            <h2 className="text-xl font-bold">Home</h2>
          </Link>
          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
              <div className="flex items-center gap-1">
                <CiHeart className="text-[24px] " />
                <NavLink className={"text-xl hover:text-gray-400 transition-all  " } >
                  <p>Wishlist</p>
                </NavLink>
              </div>
              <div className="flex items-center gap-1 navbar__collection">
                <IoCartOutline className="text-[24px] " />
                <NavLink className={"text-xl hover:text-gray-400 transition-all  "}>
                 <p> Cart</p>
                </NavLink>
              </div>
              <button onClick={() => dispatch({ type: "LOGOUT" })} className="border-none outline-none text-xl font-bold">
                Logout
              </button>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
