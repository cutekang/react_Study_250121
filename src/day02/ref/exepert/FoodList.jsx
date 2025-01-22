import React from 'react';

const FoodList = (food, key) => {
    
    const foodname = food;
    const foodnumber = key;
    console.log(foodname)

    return (
        <div>
            <li>
                <input value={foodnumber} type="checkbox" />
                <span>{foodname}</span>
            </li>
        </div>
    );
};

export default FoodList;