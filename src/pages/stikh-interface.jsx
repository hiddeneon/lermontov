import React from "react";
import { Link } from "react-router-dom";
import poemsData from "../data/poemsData.json";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../useDocumentTitle";

export default function Stikh() {

    let { verseId } = useParams();
    let verseElementNumber = poemsData.findIndex(({ URLTitle }) => URLTitle === verseId);
    useDocumentTitle(poemsData[verseElementNumber].title);

    return (
        <div className="verse-content-body">
            
                <h1>{poemsData[verseElementNumber].title}</h1>
                <Link to={verseElementNumber > 0 ? "/stikhi/" + poemsData[verseElementNumber - 1].URLTitle : poemsData[0]}><button>{"<---"}</button></Link>
                <div className="verse-container">
                    <p>{poemsData[verseElementNumber].poem}</p>
                </div>
            <Link to={verseElementNumber < poemsData.length - 1 ? "/stikhi/" + poemsData[verseElementNumber + 1].URLTitle : poemsData[0]}><button>{"--->"}</button></Link>
        </div>
    );
};