import React, { useState } from 'react';

function FoodForm() {
    const [username, setUsername] = useState('');
    const [foodtype, setFoodtype] = useState('');
    const [mood, setMood] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert(`
            Hi ${username}
            You like ${foodtype}
            You are feeling ${mood} today
            `);
    }

    return (
        <>
            <h1>Welcome {username}</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:</label>
                <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label>What food would you like today:</label>
                <input type='text' name='foodtype' value={foodtype} onChange={(e) => setFoodtype(e.target.value)}/>
                <label>How are you feeling today:</label>
                <input type='text' name='mood' value={mood} onChange={(e) => setMood(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default FoodForm;