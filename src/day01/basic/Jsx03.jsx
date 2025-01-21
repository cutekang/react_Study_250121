// name과 age 입력 후 화면에 랜더링 시키기 실습.
// 5분
export default function Jsx03(){
    const name = "양진영" /*prompt("이름을 입력하세요");*/
    const age = 10 /*prompt("나이를를 입력하세요");*/

    return(
        <>
            <div>
                내이름은 {name}, 나이는 {age}
            </div>
        </>
    )
}