import React, { useState } from 'react';

// 강아지 버튼, 고양이 버튼 2개를 생성한다.
// 버튼을 눌렀을 때 각 울음소리가 나오도록 화면에 구현한다.
// 강아지 버튼을 누르면 멍멍이 화면에 출력되고,
// 고양이 버튼을 누르면 야용이 화면에 출력된다.

const Sound = () => {
    const [crying,setCrying] = useState("")

    const onClickBark = () => {
        setCrying("멍멍")
    }

    const onClickMeow = () => {
        setCrying("야옹")
    }


    return (
        <div>
            <button onClick={onClickBark}>강아지</button>
            <button onClick={onClickMeow}>고양이</button>

            {crying}
        </div>
    );
};

export default Sound;