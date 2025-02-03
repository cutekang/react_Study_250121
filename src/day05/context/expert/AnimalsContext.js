// 1. 컨텍스트 생성 및 초기화
// 2. Provider 생성 및 value
// 3. Animals 초기값 ["누렁이", "점박이", "얼룩이"]
// 4. insert, remove 메서드
// 5. context, provider 내보내기

import { createContext, useState } from "react";

const AnimalsContext = createContext(
    {
        state : {
            animals : [""]
        },
        action : {
            insert : () => {},
            remove : () => {}
        }
})

const AnimalsProvider = ({children}) => {
    const [animals, setAnimals] = useState(["누렁이","점박이","얼룩이"]);

    const value = {
        state : { animals },
        action : { 
            insert : (input) => {setAnimals(animals.concat(input))},
            remove : (index) => {setAnimals(animals.filter((animal,i) => i !== index))},
        },
    }

    return (
        <AnimalsContext.Provider value={value}>
            {children}
        </AnimalsContext.Provider>
    )
}

export {AnimalsContext, AnimalsProvider};


