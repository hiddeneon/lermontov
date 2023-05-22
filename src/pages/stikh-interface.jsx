import React from "react";
import poemsData from "../data/poemsData.json";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../useDocumentTitle";
import leftArrow from "../img/left-arrow.png";
import rightArrow from "../img/right-arrow.png";
import NavButton from "../components/NavButton";
import VerseContainer from "../components/VerseContainer";

export default function Stikh() {

    let { verseId } = useParams();
    let verseElementNumber = poemsData.findIndex(({ URLTitle }) => URLTitle === verseId);
    useDocumentTitle(poemsData[verseElementNumber].title);

    const previous = {
        class: "left-arrow",
        altSign: "предыдущий",
        imgName: leftArrow
    };

    const next = {
        class: "right-arrow",
        altSign: "следующий",
        imgName: rightArrow
    };

    return (
        <div className="verse-content-body">
            <h1 style={{fontSize: poemsData[verseElementNumber].title.length > 20 ? "4vw" : ""}}>{poemsData[verseElementNumber].title}</h1>
            <p>{poemsData[verseElementNumber].subtitle}</p>
            <p>{poemsData[verseElementNumber].title.length}</p>
            <div className="verse-panel">
                <NavButton verseElementNumber={verseElementNumber} poemsData={poemsData} arrow={previous} />
                <VerseContainer poemsData={poemsData} verseElementNumber={verseElementNumber} />
                <NavButton verseElementNumber={verseElementNumber} poemsData={poemsData} arrow={next} />
            </div>
        </div>
    );
};