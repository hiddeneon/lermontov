import React from "react";
import { Link } from "react-router-dom";
import poemsData from "../data/poemsData.json";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../useDocumentTitle";
import leftArrow from "../img/left-arrow.png";
import rightArrow from "../img/right-arrow.png";

export default function Stikh() {

    let { verseId } = useParams();
    let verseElementNumber = poemsData.findIndex(({ URLTitle }) => URLTitle === verseId);
    useDocumentTitle(poemsData[verseElementNumber].title);

    return (
        <div className="verse-content-body">
            <h1>{poemsData[verseElementNumber].title}</h1>
            <div className="verse-panel">
                <div className="nav-button" id="left-arrow">
                    <Link to={verseElementNumber > 0 ? "/stikhi/" + poemsData[verseElementNumber - 1].URLTitle : poemsData[0]}><button><img alt="предыдущий" src={leftArrow}  height="60px"/></button></Link>
                </div>
                <div className="verse-container">
                    <div className="verse-body">
                        <p>{poemsData[verseElementNumber].poem}</p>
                    </div>
                </div>
                <div className="nav-button" id="right-arrow">
                    <Link to={verseElementNumber < poemsData.length - 1 ? "/stikhi/" + poemsData[verseElementNumber + 1].URLTitle : poemsData[0]}><button><img alt="следующий" src={rightArrow}  height="60px"/></button></Link>
                </div>
            </div>
        </div>
    );
};