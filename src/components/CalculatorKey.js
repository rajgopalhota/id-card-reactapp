import React from 'react'
import './Styles/Buttons.css'
export default function CalculatorKey(props) {
    return (
        <button className={`${props.className}`}
            onClick={() => props.onClick(props.keyValue)}
        >
            {props.keyValue}{" "}
        </button>
    )
}