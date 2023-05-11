import React from "react";
import { Link } from "react-router-dom";
import poemsData from "../data/poemsData.json";
import useDocumentTitle from "../useDocumentTitle";

export default function Stikhi() {
    useDocumentTitle('Стихи');

    return (
        <div className="verse-list-container">
            <div className="period-container">
                <h2>Ранние произведения</h2>
                <div className="list-of-verses">
                    <ul>
                        {poemsData.map(({ id, title, URLTitle }) => (
                            <li key={id}>
                                <Link to={URLTitle}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="period-container">
                <h2>Позднее творчество</h2>
            </div>
            <div className="period-container">
                <h2>Стихотворения разных лет</h2>
            </div>
        </div>
    );
};