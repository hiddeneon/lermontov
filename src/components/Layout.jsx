import React from "react";
import logo from "../img/header-logo.png";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <>
            <div className="header">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                <ul>
                    <li>
                        <Link to="/stikhi">стихи</Link>
                    </li>
                    <li>
                        <Link to="/proza">проза</Link>
                    </li>
                    <li>
                        <Link to="/bio">биография</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}