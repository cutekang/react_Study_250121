import React from 'react';

  // 유저정보(JSON)를 객체로 바꾼다.
  // 유저정보를 화면에 출력한다.
  // 유저의 이름(name), 전화번호(phone), 회사의 이름(company name), 도시 이름(city)
  // 유저의 리스트로 출력하고 유저 정보를 가로로 배치한다.

const User = ({name,phone,company,address}) => {
    const companyName = company.name
    const city = address.city
    return (
        <ul>
            <li>
                <p>유저이름</p>
                <p>{name}</p>
            </li>
            <li>
                <p>전화번호</p>
                <p>{phone}</p>
            </li>
            <li>
                <p>회사명</p>
                <p>{companyName}</p>
            </li>
            <li>
                <p>도시명</p>
                <p>{city}</p>
            </li>
        </ul>
    );
};

export default User;