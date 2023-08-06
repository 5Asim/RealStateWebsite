import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import ContactScreen from "../Screen/contact";

const NaigationLink = (props) => {
  const { linkText, text } = props;
  return (
    <NavLink
      to={`/${linkText}`}
      activeStyle={{ fontWeight: "bold", color: "red" }}
      className="text-black hover:text-blue-900 aria-[current=page]:text-blue-400"
    >
      {text}
    </NavLink>
  );
};

const NavBar = () => {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <h1>Logo</h1>

          {/* <img className="logo" src="images/logo.png" alt="logo" /> */}
        </div>
        <div>
          <ul className="font-nav text-xl font-semibold items-center ">
            <NaigationLink linkText="" text="HOME" />
            <NaigationLink linkText="rent" text="RENT" />
            <NaigationLink linkText="buy" text="BUY" />

            <li className="hover:text-blue-900">SELL</li>
            <li className="hover:text-blue-900 ">ABOUT</li>
            <li>
              <button
                type="button"
                className="delay-150 text-blue hover:text-white border border-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-nav font-semibold rounded-xl text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-900 dark:text-blue-900 "
              >
                <Link to="/contact_us">CONTACT US</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
