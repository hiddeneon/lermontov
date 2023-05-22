import React from "react";
import { Link } from "react-router-dom";


export default function NavButton({ verseElementNumber, poemsData, arrow }) {
    return (
        <div className="nav-button" id={arrow.class}>
                <Link to={verseElementNumber > 0 ? "/stikhi/" + poemsData[arrow.class === "left-arrow" ? --verseElementNumber : ++verseElementNumber].URLTitle : poemsData[0]}><button><img alt={arrow.altSign} src={arrow.imgName}  height="60px"/></button></Link>
        </div>
    )
}