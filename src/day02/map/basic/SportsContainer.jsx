import React from 'react';
import Sports from './Sports';

const SportsContainer = () => {
    
    const sprotsList = [
        {
            name : "축구",
            member : 11
        },
        {
            name : "농구",
            member : 5
        },
        {
            name : "테니스",
            member : 4
        },
        {
            name : "야구",
            member : 9
        },
        {
            name : "배구",
            member : 6
        }
    ]
    
    return (
        <div>
            <ul>
                {sprotsList.map((sports, i) => <Sports key={i} sports={sports} />)}
            </ul>
        </div>
    );
};

export default SportsContainer;