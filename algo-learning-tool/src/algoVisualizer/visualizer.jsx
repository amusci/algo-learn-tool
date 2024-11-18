import React, { useState, useEffect } from 'react';
import './visualizer.css';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);


    const resetArray = () => {
        const newArray = [];
        for (let i = 0; i < 150; i++) {
            newArray.push(randomNumGen(5, 400));
        }
        setArray(newArray);
    };

    
    useEffect(() => {
        resetArray();
    }, []); 

    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style={{ height: `${value}px` }}
                ></div>
            ))}
            <button onClick={resetArray}>Generate New Array</button>
        </div>
        
    );
};


const randomNumGen = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
