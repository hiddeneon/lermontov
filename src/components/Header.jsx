import React from "react";
import logo from "../img/header-logo.png";

export default function Header() {

    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <ul>
                <li>
                    <a href="/">Стихи</a>
                </li>
                <li>
                    <a href="/">Проза</a>
                </li>
                <li>
                    <a href="/">Биография</a>
                </li>
            </ul>
        </div>
    )
}