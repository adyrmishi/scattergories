import React, { useEffect, useState } from "react";
import { useGameContext } from '../context';
// const categories = require("../data/categories.json");

const categories = {
    "allCategories": ["Tube Stations", "Olympic Sports", "Girls' Names Beginning With D", "World Capitals", "Countries in Africa", "Boys' Names Beginning With F", "British TV Shows", "World Politicians", "Airlines", "'Love Is Blind' Contestants", "Zoo Animals"],
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
        if (stage === 'ready' && currentRound < rounds) {
            setCurrentRound(currentRound + 1);
            const newCategory = generateRandomCategory();
            setCategory(newCategory);
        } else if (currentRound === rounds) {
            setStage('over')
        }
    }, [stage]);

    return (
        <div id='categories' className='component'>
            {stage === 'setup' &&
                <div>
                    <h1>How many rounds?</h1>
                    <input type='number' min='5' max='20' value={rounds} onChange={() => setRounds(rounds)} />
                </div>
            }
            {stage !== 'score' && 
                <div>
                    <p>Round {currentRound} of {rounds}</p>
                    <h2 id='category-name'>{category}</h2>
                </div>
            }
        </div>
    );
}

export default Categories;


