import React from "react";
import logo from "../../public/assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
    const handleClick = () => {
        const navbar = document.querySelector(".navbar");
        const lis = document.querySelectorAll(".list-item");
        navbar.classList.toggle("open");
        lis.forEach((li) => {
            li.addEventListener("click", () => {
                navbar.classList.remove("open");
            });
        });
    };
    const location = useLocation();
    return (
        <header className=" header absolute top-0 left-0 flex w-full justify-between items-center px-6 py-12 lg:flex-row ">
            <div className="">
                <Link to="/">
                    {" "}
                    <img src={logo} alt="Logo" title={"Space-Tourism"} />
                </Link>
            </div>

            <nav className="navbar ">
                <ul>
                    <li className="list-item font-bold ">
                        {" "}
                        <Link
                            to="/"
                            className={`md:text-white md:flex md:items-center  lg:gap-x-4 ${location.pathname === "/" ? "active-link " : ""
                                }  `}
                        >
                            {" "}
                            <span className="md:text-1xl  md:hidden lg:block    ">
                                00
                            </span>{" "}
                            Home
                        </Link>{" "}
                    </li>
                    <li className="list-item font-bold ">
                        {" "}
                        <Link
                            to="/destination"
                            className={`md:text-white md:flex md:items-center  lg:gap-x-4 ${location.pathname === "/destination" ? "active-link " : ""
                                }  `}
                        >
                            {" "}
                            <span className="md:text-1xl  md:hidden lg:block    ">
                                {" "}
                                01
                            </span>{" "}
                            Destination{" "}
                        </Link>{" "}
                    </li>
                    <li className="list-item font-bold ">
                        {" "}
                        <Link
                            to="/crew"
                            className={`md:text-white md:flex md:items-center  lg:gap-x-4 ${location.pathname === "/crew" ? "active-link " : ""
                                }  `}
                        >
                            {" "}
                            <span className="md:text-1xl  md:hidden lg:block    ">
                                {" "}
                                02
                            </span>{" "}
                            Crew
                        </Link>{" "}
                    </li>
                    <li className="list-item font-bold ">
                        {" "}
                        <Link
                            to="/technology"
                            className={`md:text-white md:flex md:items-center  lg:gap-x-4 ${location.pathname === "/technology" ? "active-link " : ""
                                }  `}
                        >
                            {" "}
                            <span className="md:text-1xl  md:hidden lg:block    ">
                                {" "}
                                03
                            </span>{" "}
                            Technology
                        </Link>{" "}
                    </li>
                </ul>
            </nav>

            <div className="md:hidden">
                <button className="text-white text-6xl primary-color " onClick={handleClick}>
                    <AiOutlineMenu />
                </button>
            </div>
        </header>
    );
};

export default Header;
