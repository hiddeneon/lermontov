import React from "react";
import poemsData from "../data/poemsData.json";
import { useParams } from "react-router-dom";

export default function Stikh() {

    let { verseId } = useParams();

    return (
        <div className="verse-content-body">
            <div className="verse-container">
                <h2>{poemsData[poemsData.findIndex(({ URLTitle }) => URLTitle === verseId)].title}</h2>
                <p>{poemsData[poemsData.findIndex(({ URLTitle }) => URLTitle === verseId)].poem}</p>
            </div>
        </div>
    );
};