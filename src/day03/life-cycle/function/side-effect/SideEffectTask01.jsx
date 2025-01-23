import React, { useEffect, useState } from 'react';

// https://jsonplaceholder.typicode.com/todos
// todos에서 false인 todos만
// 내림차순으로 변경 후 10개만 가져와서 화면에 타이틀을 출력한다.


// TITLE만 받아오기때문에 재사용이 어려움
const SideEffectTask01 = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getTodos = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")

            if(!response.ok){
                throw new Error("데이터를 불러올 수 없습니다.")
            }

            const datas = await response.json();
            console.log(datas)
            setTodos(datas.filter((todo,i) => todo.completed).reverse().slice(0,10).map((todo,i) => todo.title))
        }
        getTodos()
    },[])
    
    // 데이터가 없을 경우를 위한 방어코드가 필요함
    const toDoList = todos.length && todos.map((title,i) => <li key={i}>{title}</li>)

    return (
        <div>
            <h1>{toDoList}</h1>
        </div>
    );
};

export default SideEffectTask01;