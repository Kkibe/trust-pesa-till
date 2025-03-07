import React, { useContext } from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import Logo from '../../assets/icon.png';
import { AuthContext } from "../../AuthContext";

const Header = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <header className="speedyui speedyui-header">
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" >
                        <img
                            src={Logo}
                            alt="Logo"
                            height="40"
                            width={80}
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse py-3 py-lg-0" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-4" to="/" style={({ isActive }) => ({
                                    color: isActive && "#f14084",
                                    fontWeight: isActive && "bold",

                                })}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown px-lg-4">
                                <NavLink
                                    className="nav-link d-flex align-items-center gap-2 dropdown-toggle"
                                    to="/about"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={({ isActive }) => ({
                                        color: isActive && "#f14084",
                                        fontWeight: isActive && "bold",
                                    })}
                                >
                                    About
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            fill="currentColor"
                                            className="bi bi-chevron-down"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                fillRule="evenodd"
                                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                            />
                                        </svg>
                                    </span>
                                </NavLink>
                                <ul className="dropdown-menu border-0 start-0 end-0 rounded-0 py-0">
                                    <li>
                                        <NavLink className="dropdown-item py-2" to="/about/#how-it-works" style={({ isActive }) => ({
                                            color: isActive && "#f14084",
                                            fontWeight: isActive && "bold",
                                        })}>
                                            How It Works
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item py-2" to="/about/#faqs" style={({ isActive }) => ({
                                            color: isActive && "#f14084",
                                            fontWeight: isActive && "bold",
                                        })}>
                                            FAQ's
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-4" to="/contact" style={({ isActive }) => ({
                                    color: isActive && "#f14084",
                                    fontWeight: isActive && "bold",
                                })}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item ps-lg-4">
                                <NavLink to={currentUser ? "/apply" : "/register"}
                                    type="button"
                                    className="position-relative btn primary-btn px-3 mt-3 mt-lg-0"
                                >
                                    {
                                        currentUser ? "Apply Now" : "Get Started"
                                    }
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;