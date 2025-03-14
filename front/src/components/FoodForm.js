import React, { useState } from 'react';
import './FoodForm.css';

const timeList = {
    'breakfast': '早餐',
    'brunch': '早午餐',
    'lunch': '午餐',
    'afternoonTea': '下午茶',
    'dinner': '晚餐',
}

const moodList = {
    '': '請選擇',
    'happy': '喜',
    'mad': '怒',
    'sad': '哀',
    'joy': '樂',
    'scare': '怕',
}

const foodType = {
    'rice': '飯',
    'noodle': '麵',
    'soup': '湯',
    'hot': '熱',
    'cold': '冷',
    'sweet': '甜',
    'salty': '鹹',
    'bitter': '苦',
}

function FoodForm() {
    const [username, setUsername] = useState('');
    const [foodtype, setFoodtype] = useState([]);
    const [mood, setMood] = useState('');
    const [show, setShow] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setShow(true);
    }

    function checkboxChange(e) {
        const value = e.target.value;
        setFoodtype((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    }

    return (
        <>
            <h1><i>Foodienie</i></h1>
            <form onSubmit={handleSubmit}>
                <label>嗨!你是:</label>
                <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label>用餐時段:</label>
                <select name='time' id='time'>
                    {
                        Object.entries(timeList).map(([key, val]) => (
                            <option value={key}>{val}</option>
                        ))
                    }
                </select>

                <label>心情:</label>
                <select name='mood' id='mood' onChange={(e) => setMood(e.target.value)}>
                    {
                        Object.entries(moodList).map(([key, val]) => (
                            <option value={key}>{val}</option>
                        ))
                    }
                </select>

                <label>食物種類:</label>
                <div className="food-type-container">
                    {
                        Object.entries(foodType).map(([key, val]) => (
                            <div key={key} className="food-option">
                                <input type='checkbox' id={key} value={key} onChange={checkboxChange}/>
                                <label htmlFor={key}>{val}</label>
                            </div>
                        ))
                    // }
                </div>

                <button type='submit'>送出</button>
            </form>
            <div className='confirmation'>
                {
                    show && (<p>你好 {username} <br/><strong>正在搜尋</strong> {foodtype.map(key => foodType[key]).join(', ')} <br/>今日心情: {moodList[mood]}</p>)
                }
            </div>
        </>
    )
}

export default FoodForm;