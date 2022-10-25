import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdStarRate } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { globalImages } from "../../utils/global.images";
import "./index.css";

const Sidebar = ({ children }) => {
    const [show, setShow] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <main className={show && "space-toggle"}>
            <header className={`header ${show ? "space-toggle" : null}`}>
                <div className="header-toggle" onClick={() => setShow(!show)}>
                    <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
                </div>
                <div className="header-toggle" onClick={() => setShow(!show)}>
                    <p className="header-title"> Super Heroes </p>
                    <img src={globalImages.logoHeader} alt="Logo" className="header-image" />
                </div>
            </header>

            <aside className={`sidebar ${show && "show"}`}>
                <nav className="nav">
                    <div>
                        <Link to="/" className="nav-logo" onClick={ () => onUpdateActiveLink("Home")}>
                            <AiFillHome size={30} color="white" />
                            <span className="nav-logo-name">HomePage</span>
                        </Link>
                        <Link to="/" className={activeLink === "Home" ? "nav-link-body active" : "nav-link-body"} onClick={ () => onUpdateActiveLink("Home")}>
                            <MdDashboard size={30} color="white" className="pl-1" />
                            {show && <span className="nav-link-name">Dashboard</span>}
                        </Link>
                        <Link to="/favorites" className={activeLink === "Favorites" ? "nav-link-body active" : "nav-link-body"} onClick={ () => onUpdateActiveLink("Favorites")}>
                            <MdStarRate size={30} color="white" />
                            {show && <span className="nav-link-name">Favorites</span>}
                        </Link>
                    </div>
                </nav>
            </aside>
            <div>
                {children}
            </div>
        </main>
    );
};

export default Sidebar;