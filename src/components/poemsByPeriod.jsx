import React from "react";
import { Link } from "react-router-dom";

export default function PoemsByPeriod({ poemsSourceFile, periodName }) {
    return (
        <div className="period-container">
                <h2>{periodName}</h2>
                <div className="list-of-verses">
                    <ul>
                        {poemsSourceFile.map(({ id, title, URLTitle }) => (
                            <li key={id}>
                                <Link to={URLTitle}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    )
}