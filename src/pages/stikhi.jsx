import React from "react";
import poemsData from "../data/poemsData.json";
import useDocumentTitle from "../useDocumentTitle";
import PoemsByPeriod from "../components/poemsByPeriod";

export default function Stikhi() {
    useDocumentTitle('Стихи');

    return (
        <div className="verse-list-container">
            <PoemsByPeriod poemsSourceFile={poemsData} periodName={"Ранние произведения"} />
            <PoemsByPeriod poemsSourceFile={poemsData} periodName={"Поздний период"} />
        </div>
    );
};