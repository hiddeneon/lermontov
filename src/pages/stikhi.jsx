import React from "react";
import poemsData from "../data/poemsData.json";
import useDocumentTitle from "../useDocumentTitle";
import PoemsByPeriod from "../components/poemsByPeriod";

export default function Stikhi() {
    useDocumentTitle('Стихи');

    return (
        <div className="verse-list-container">
            <PoemsByPeriod poemsSourceFile={poemsData} periodName={"Ранние произведения"} />
            <div className="period-container">
                <h2>Позднее творчество</h2>
            </div>
            <div className="period-container">
                <h2>Стихотворения разных лет</h2>
            </div>
        </div>
    );
};