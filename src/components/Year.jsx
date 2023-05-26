import React from "react";

export default function Year({ color, yearColorToggle }) {
    return (
        <div className="year">
            <p style={{color: color}} onClick={yearColorToggle}>2023</p>
        </div>
    )
}