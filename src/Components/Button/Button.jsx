// Button.js
import React from "react";

export default function Button({ handleClick }) {
    return (
        <div className="text-center">
            <button className="bg-green-600 px-3 py-3 rounded-lg text-white" onClick={handleClick} type="button">
                Click to generate a joke
            </button>
        </div>
    );
}
