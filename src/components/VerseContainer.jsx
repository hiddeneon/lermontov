import React from "react";

export default function VerseContainer({ poemsData, verseElementNumber }) {
    return (
        <div className="verse-container">
            <div className="verse-body">
                <p>{poemsData[verseElementNumber].poem}</p>
            </div>
        </div>
    )
}