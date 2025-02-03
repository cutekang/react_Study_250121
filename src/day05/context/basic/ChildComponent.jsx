import React from 'react';
import { FontSizeConsumer } from './FontContext';

// context에 색상 "red" 초기값을 추가하고, p태그에 적용,
// 색상을 바뀌는 버튼을 눌렀을 때 "pink"로 색깔이 바뀔 수 있게 처리하기
const ChildComponent = () => {
    return (
        <FontSizeConsumer>
            {
                (context) => (
                    <>
                        <p style={{color : context.colorState.color}}>색상이 나오는 글자 💪🏻</p>
                        <button onClick={() => {context.colorAction.setColor("pink")}}>색상 변경</button>
                    </>
                )
            }
        </FontSizeConsumer>
    );
};

export default ChildComponent;