import React from 'react';

const Food = ({food,index}) => {
    const {name, price, origin} = food

    console.log(name)

    return (
        <li>
            <p>판매음식 : {name}</p>
            <p>가격 : {price}</p>
            <p>원산지 : {origin.map((coa, i, origin) => i === origin.length -1 ? coa : coa + ", ")}</p>
            {/* <p>원산지 : {origin[0]}</p> */}
        </li>
    );
};

export default Food;