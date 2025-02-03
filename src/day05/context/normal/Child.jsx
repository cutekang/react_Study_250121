import React, { useContext } from 'react';
import { FontSizeConsumer, FontSizeContext } from './FontContext';

const Child = () => {
    const {state,action} = useContext(FontSizeContext)
    const fontSize = state;
    const setFontSize = action;
    // const fontSizeContext = useContext(FontSizeContext)
    // console.log(fontSizeContext)

    return (
        <>
            <p style={{fontSize}}>글자 나타내기</p>
            <button onClick={() => {setFontSize("10rem")}}>크기 변경</button>
        </>
        // <FontSizeConsumer>
        //     {
        //         (context) => (
        //             console.log(context)
        //         )
        //     }
        // </FontSizeConsumer>
    );
};

export default Child;