import React from "react";
import poemsData from "../data/poemsData.json";
import { useParams } from "react-router-dom";

export default function Stikh() {

    let { verseId } = useParams();

    return (
        <div className="verse-content-body">
            <h2>{poemsData[poemsData.findIndex(({ URLTitle }) => URLTitle === verseId)].title}</h2>
            <div className="verse-container">
                <p>{poemsData[poemsData.findIndex(({ URLTitle }) => URLTitle === verseId)].poem}</p>
            </div>
        </div>
    );
};