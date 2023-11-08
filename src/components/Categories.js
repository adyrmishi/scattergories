import React, { useEffect, useState } from "react";
import { useGameContext } from '../context';
// const categories = require("../data/categories.json");

const categories = {
    "allCategories": ["Tube Stations", "Olympic Sports", "Girls' Names Beginning With D", "World Capitals", "Countries in Africa", "Boys' Names Beginning With F", "British TV Shows", "World Politicians", "Airlines", "'Love Is Blind' Contestants", "Zoo Animals", "Languages", "'The X Factor' Judges", "'I'm A Celebrity, Get Me Out Of Here' Contestants", "Famous Mathematicians"],
    "selectedCatergories": []
}

function Categories() {
    const { stage, rounds, currentRound, setCurrentRound, setStage, setRounds } = useGameContext();
    const [category, setCategory] = useState("");

    const generateRandomCategory = () => {
        const allCategories = categories["allCategories"];
        const randomIndex = Math.floor(Math.random() * allCategories.length);
        const selectedElement = allCategories.splice(randomIndex, 1)[0];
        categories["selectedCatergories"].push(selectedElement);
        return selectedElement;
    }

    useEffect(() => {
        if (stage === 'ready') {
            if (currentRound < rounds) { setCurrentRound(currentRound + 1) }
            const newCategory = generateRandomCategory();
            setCategory(newCategory);
        }
    }, [stage]);

    return (
        <div id='categories' className='component'>
            {stage === 'setup' &&
                <div>
                    <h1>How many rounds?</h1>
                    <div class='input'>
                        {rounds > 1 && <i class="bi bi-dash" onClick={e => { setRounds(rounds - 1) }}></i>}
                        <p>{rounds}</p>
                        {rounds < 20 && <i class="bi bi-plus" onClick={e => { setRounds(rounds + 1) }}></i>}

                    </div>
                </div>
            }
            { (stage ==='ready' || stage === 'round') && 
                <div>
                    <p>Round {currentRound} of {rounds}</p>
                    <h2 id='category-name'>{category}</h2>
                </div>
            }
        </div>
    );
}

export default Categories;


