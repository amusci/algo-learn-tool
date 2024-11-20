import React, { useState, useEffect, useRef } from 'react';
import './visualizer.css';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);
    const cancelSortRef = useRef(false);
    console.log(cancelSortRef);


    const resetArray = () => {
        // need to make this stop any sorting when ran
        cancelSortRef.current = true;
        const newArray = [];
        for (let i = 0; i < 150; i++) {
            newArray.push(randomNumGen(5, 400));
        }
        setArray(newArray);
        setSortedIndices([]);
        
        setTimeout(() => { cancelSortRef.current = false;}, 0);
    };

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        
        const bubbleSort = () => {
            
            console.log('Bubble Sort');
            
        };
    
        const mergeSort = () => {
            console.log('Merge Sort');
            
        };
    
        const quickSort = async () => {
            //console.log('Quick Sort');
            if (cancelSortRef.current) return;
            const arrayCopy = [...array];
            await quickSorter(arrayCopy, 0, arrayCopy.length - 1);

            if (!cancelSortRef.current) {
                setArray(arrayCopy);
            }
        };


    
        const quickSorter = async (arr, low, high) => {
            if (cancelSortRef.current) return;
            if (low < high && !cancelSortRef.current) {
                const pivotIndex = await partition(arr, low, high);
                await quickSorter(arr, low, pivotIndex - 1);
                await quickSorter(arr, pivotIndex + 1, high);
            } else if (low === high && !cancelSortRef.current) {
                // mark sorted
                setSortedIndices(prev => [...prev, low]);
            }
        };
    
        const partition = async (arr, low, high) => {
            if (cancelSortRef.current) return;
            const pivot = arr[high];
            let i = low - 1;
    
            for (let j = low; j < high; j++) {
                if (cancelSortRef.current) return;
                if (arr[j] < pivot && !cancelSortRef.current) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    setArray([...arr]);
                    await sleep(5);
                }
            }
            if (cancelSortRef.current) return;
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            setArray([...arr]);
            await sleep(5);

            if (!cancelSortRef.current) {
                
                setSortedIndices(prev => [...prev, i + 1]);
            }
    
            return i + 1;
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
                        className={`array-bar ${sortedIndices.includes(idx) ? 'sorted' : ''}`}
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
