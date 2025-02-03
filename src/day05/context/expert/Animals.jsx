import React, { useContext, useRef, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';

// context에 저장된 동물 세마리를 버튼으로 출력
// input에 동물을 입력 후 엔터 : 동물 버튼 추가
// 동물 버튼을 클릭하면 해당 버튼을 삭제
// 각 context에 선언된 insert, remove의 action을 사용한다.



const Animals = () => {
    const inputRef = useRef();

    const {state,action} = useContext(AnimalsContext);

    const onChange = (e) => {
        // console.log(inputRef.current.value)
        // console.log(action.insert)
    }

    const animals = state;

    const insert = action.insert;
    const remove = action.remove;

    let insertitem;
    
    return (
        <div>
            <div style={{display : "flex", flexDirection : "column"}}>
                {animals.animals.map((animal, i) => <button onClick={() => {remove(i)}} style={{width : "100px", height : "50px"}} key={i}>{animal}</button>)}
            </div>
            <div>
                <input ref={inputRef} type="text" placeholder='동물이름을 입력해주세요' onChange={onChange}/>
            </div>
            <div>
                <button onClick={() => {
                    insertitem = inputRef.current.value;
                    inputRef.current.value = ""
                    insert(insertitem)}
                    }>추가</button>
            </div>
        </div>
    );
};

export default Animals;

//onClick={insert(inputRef.current.value)}

// <div>
        //     <div style={{display : "flex", flexDirection : "column"}}>
        //         {animals.animals.map((animal, i) => <button onClick={remove(i)} style={{width : "100px", height : "50px"}} key={i}>{animal}</button>)}
        //     </div>
        //     <div>
        //         <input type="text" placeholder='동물이름을 입력해주세요' onChange={onChange((e) => e)}/>
        //     </div>
        //     <div>
        //         <button onClick={insert(inputVal)}>추가</button>
        //     </div>
        // </div>