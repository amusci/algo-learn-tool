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

        
        const bubbleSort = () => {
            
            console.log('Bubble Sort');
            
        };
    
        const mergeSort = () => {
            console.log('Merge Sort');
            
        };
    
        const quickSort = () => {
            console.log('Quick Sort');
        };

    
    useEffect(() => {
        resetArray();
    }, []); 

    return (
        <div className="visualizer-container">
            {/*all the buttons*/}
            <div className="button-container">
                <button onClick={resetArray}>Generate New Array</button>
                <button onClick={bubbleSort}>Bubble Sort</button>
                <button onClick={mergeSort}>Merge Sort</button>
                <button onClick={quickSort}>Quick Sort</button>
            </div>

            {/*bars*/}
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{ height: `${value}px` }}
                    ></div>
                ))}
            </div>

            <div className="desc-container">
                {/*descriptions*/}
                <div className="desc">

                </div>
            </div>
        </div>
    );
};


const randomNumGen = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
