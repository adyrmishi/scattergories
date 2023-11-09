import React, { useEffect, useState } from "react";
import { useGameContext } from '../context';
import { supabase } from '../client';

function Categories() {
    const { stage, rounds, currentRound, setCurrentRound, setRounds } = useGameContext();
    const [category, setCategory] = useState("");

    useEffect(() => {
        if (stage === 'ready') {
            if (currentRound < rounds) { setCurrentRound(currentRound + 1) }
            const generateRandomCategory = async () =>  {
                const { data } = await supabase.rpc('generate_random_category');
                setCategory(data.category)
                const { error } = await supabase
                    .from('Categories')
                    .update({ selected: true })
                    .eq('id', data.id)
                if ({ error } !== null) {
                    return {error}
                }
            }
            generateRandomCategory();
            if (stage === 'score') {
                setCategory("");
            }
        }
    }, [stage, currentRound, setCurrentRound, rounds]);

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


