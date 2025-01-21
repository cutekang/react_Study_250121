import React, { useState } from 'react';

// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자의 색깔을 없앤다.

const Colors = () => {
    const [colors, setColors] = useState("black");

    const onClickRed = () => {
        setColors("red")
    }

    const onClickBlue = () => {
        setColors("blue")
    }

    return (
        <div>
            <p style={{color : colors}}>결과</p>
            <input onKeyUp={(e) => {
                e.key === "Enter" && e.target.value === "핑크색" && setColors("black")
            }}
            type="text" />
            <button onClick={onClickRed}>빨간색</button>
            <button onClick={onClickBlue}>파란색</button>
        </div>
    );
};

export default Colors;