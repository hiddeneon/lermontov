import React from "react";
import poemsData from "../data/poemsData.json";

export default function Stikh() {

    return (
        <>
            <div className="verse-container">
                <h2>{poemsData[0].title}</h2>
                <p>{poemsData[0].poem}</p>
            </div>
        </>
    );
};