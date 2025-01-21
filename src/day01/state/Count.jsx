import React, { useState } from 'react';

const Count = () => {
    const[number, setNumber] = useState(0)
    const onClickToDecrease = () => {
        setNumber(number - 10)
    }
    const onClickToIncrease = () => {
        setNumber(number + 10)
    }
    return (
        <div>
            <button onClick={onClickToDecrease}>-</button>
            {number}
            <button onClick={onClickToIncrease}>+</button>
        </div>
    );
};

export default Count;