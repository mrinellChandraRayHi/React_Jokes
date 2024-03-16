// Jokes.js
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function Jokes() {
    const [joke, setJoke] = useState("");

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setJoke(data.joke);
        } catch (error) {
            console.log("Data not found:", error);
        }
    };

    useEffect(() => {
        fetchData("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
    }, []);

    const handleClick = () => {
        fetchData("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
    };

    return (
        <div className="max-w-[500px] mx-auto text-center">
            <Button handleClick={handleClick} />
            <p className="bg-orange-300 px-4 py-2 rounded-lg mt-5">{joke}</p>
        </div>
    );
}
