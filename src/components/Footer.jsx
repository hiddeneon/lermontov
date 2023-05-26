import React, { useState } from "react";
import Year from "./year";

export default function Footer() {

    const [color, setColor] = useState();

    const colorBox = ["red", "yellow", "blue", "green", "orange", "pink", "chartreuse"];

    let colorIndex = Math.floor(Math.random() * colorBox.length);

    const yearColorToggle = () => {

        while (colorBox[colorIndex] === color) { // excludes the chance to apply the same color twice in ar row
            colorIndex = Math.floor(Math.random() * colorBox.length);
        };

        setColor(colorBox[colorIndex]); 
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <Year color={color} yearColorToggle={yearColorToggle} />
                <div className="about">
                    <ul>
                        <li><a href="/">О проекте</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}