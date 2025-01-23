import React from 'react';

const FoodList = ({ food, checked, index, onCheck }) => {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onCheck(index)} // 체크 상태 변경 이벤트
                />
                <span>{food}</span>
            </label>
        </li>
    );
};

export default FoodList;
// git test