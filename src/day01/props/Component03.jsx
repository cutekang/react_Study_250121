import React from 'react';

// box 3개 만들고, 가로로 배치하기
// 단 box의 크기는 너비 100px, 높이 100px, 백그라운드 컬러는 오렌지이다.
// 모든 변수는 컨테이너에서 선언

const Component03 = ({containerStyle, boxStyle}) => {
    
    return (
        <div style={containerStyle}>
            <div style={boxStyle}></div>
            <div style={boxStyle}></div>
            <div style={boxStyle}></div>
        </div>
    );
};

export default Component03;