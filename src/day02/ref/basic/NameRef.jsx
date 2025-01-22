import React, { useRef, useState } from 'react';

const NameRef = () => {
    // 사용자가 입력한 이름을 p태그에 실시간으로 작성
    // 버튼을 클릭하면 이름뒤에 "님"을 붙이도록 구현
    // 입력 후 엔터를 작성하면 p태그에 반영
    const nameRef = useRef()
    const [result, setResult] = useState("");
    const onChangeToResult = (e) => {
        setResult(e.target.value)
    }

    const onKeyDownEnter = (e) => {
        if(e.key === "Enter"){
            setResult(nameRef.current.innerText.replaceAll("님","") + " 님")
        }
    }

    const onClickToReset = () => {
        setResult("")
    }

    return (
        <div>
            <p ref={nameRef}>{result}</p>
            <input value={result} type="text" placeholder='이름을 입력하세요.' onChange={onChangeToResult} onKeyDown={onKeyDownEnter}/>
            <button onClick={onClickToReset}>초기화 버튼</button>
        </div>
    );  
};

export default NameRef;