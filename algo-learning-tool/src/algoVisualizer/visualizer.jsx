import React from 'react';
import './visualizer.css';

export default class SortingVisualizer extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            array: [], // main array
            

        };

    }

    componentDidMount() {

        // when component loads

        this.resetArray();

    }

    resetArray() {

        const array = []; 
        for (let i = 0; i <150; i++) {

            array.push(randomNumGen(5, 400));

        }

        this.setState({array});

    }
    
    render() {

        const {array} = this.state;

        return (

            <div className="array-container">
            
            {array.map((value,idx) => (

                <div 
                    className="array-bar"
                    key={idx}
                    style={{height: `${value}px`}}></div>

            ))}
            
            </div>

        );

    }
    
}

function randomNumGen(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}