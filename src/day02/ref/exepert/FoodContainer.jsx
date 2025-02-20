import React, { useRef, useState } from 'react';
import FoodList from './FoodList';

const FoodContainer = () => {
    const inputRef = useRef([]);
    const [totalResult, setTotalResult] = useState([]);

    const onClickAdd = () => {
        const koreanFood = inputRef.current[0]?.value;
        const englishFood = inputRef.current[1]?.value;

        if (koreanFood && englishFood) {
            setTotalResult((prevResult) => [
                ...prevResult,
                { food: `${koreanFood} (${englishFood})`, checked: false }
            ]);
            inputRef.current[0].value = '';
            inputRef.current[1].value = '';
        }
    };

    const handleCheck = (index) => {
        setTotalResult((prevResult) =>
            prevResult.map((item, i) =>
                i === index ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const onClickDeleteChecked = () => {
        setTotalResult((prevResult) => prevResult.filter((item) => !item.checked));
    };

    const resultList = totalResult.map((item, index) => (
        <FoodList
            food={item.food}
            checked={item.checked}
            index={index}
            key={index}
            onCheck={handleCheck}
        />
    ));

    return (
        <div>
            <div>
                <input
                    ref={(el) => {
                        inputRef.current[0] = el;
                    }}
                    type="text"
                    placeholder="한국 음식 이름"
                />
                <input
                    ref={(el) => {
                        inputRef.current[1] = el;
                    }}
                    type="text"
                    placeholder="영어 음식 이름"
                />
            </div>
            <div>
                <button onClick={onClickAdd}>추가</button>
                <button onClick={onClickDeleteChecked}>삭제</button>
            </div>
            <div>
                <ul style={{ listStyleType: 'none' }}>{resultList}</ul>
            </div>
        </div>
    );
};

export default FoodContainer;

// 강사님 풀이
// import React, { useRef, useState } from 'react';

// const ExpertFood = () => {
//   const [foods, setFoods] = useState([])
//   const [checked, setChecked] = useState([])

//   const inputRef = useRef([])
//   const onClickAddFood = () => {
//     setFoods(
//       foods.concat({
//         kor : inputRef.current[0].value,
//         eng : inputRef.current[1].value
//       })
//     )
//     setChecked(checked.concat(false))
//   }
  
//   const onChangeCheckbox = (i) => {
//     checked.splice(i, 1, !checked[i])
//     setChecked(checked.concat())
//   }
  
//   const onClickRemoveFood = () => {
//     setFoods(foods.filter((food, i) => !checked[i]))
//     setChecked(new Array(foods.length - 1).fill(false)) 
//   }
//   console.log("foods", foods)
//   console.log("checked", checked)


//   const foodList = foods.map(({kor, eng}, i) => {
//     return (
//       <li key={i}>
//         <input type="checkbox"
//           checked={checked[i]} 
//           onChange={() => { onChangeCheckbox(i) }}
//         />
//         {`${kor} (${eng})`}
//       </li>
//     )
//   })

//   return (
//     <div>
//       <input type="text" placeholder='한국 음식 이름' ref={(el) => { inputRef.current[0] = el}}/>
//       <input type="text" placeholder='영어 음식 이름' ref={(el) => { inputRef.current[1] = el}}/>
//       <button onClick={onClickAddFood}>추가</button>
//       <button onClick={onClickRemoveFood}>삭제</button>
//       <div>
//         <ul>
//           {foodList}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ExpertFood;