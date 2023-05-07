import React from "react";
import { Link } from "react-router-dom";

export default function Stikhi() {

    return (
        <>
            <div className="list-of-verses">
                <ul>
                    <li><Link to="predskazanie">Предсказание</Link></li>
                    <li><Link to="vetka-palestiny">Ветка Палестины</Link></li>
                    <li><Link to="uznik">Узник</Link></li>
                </ul>
            </div>
        </>
    );
};