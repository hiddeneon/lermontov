import React from "react";
import { Link } from "react-router-dom";
import poemsData from "../data/poemsData.json";

export default function Stikhi() {

    return (
        <>
            <div className="list-of-verses">
                <ul>
                    {poemsData.map(({ id, title, URLTitle }) => (
                        <li key={id}>
                            <Link to={URLTitle}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};