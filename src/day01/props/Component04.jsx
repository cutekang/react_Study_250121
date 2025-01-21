import React from 'react';

// 버튼을 눌렀을 때, 컨테이너에서 함수와 이름을 받아서
// 콘솔에 출력하기
// 1) 함수는 어떤 값을 받으면 콘솔에 출력해주는 함수
// 2) 이름은 본인 이름의 변수

const inputValue = (name, value) => {
    console.log(`입력값 : ${value}, 이름 : ${name}`)
}

const Component04 = (name, value) => {
    return (
        <div>
            <button name={"button"} type={"button"} onClick={inputValue(name,value)}>출력</button>
        </div>
    );
};

export default Component04;