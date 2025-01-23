import React, { useEffect, useState } from 'react';

const SideEffectMount = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        const getDatas = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums")
            if(!response.ok){
                throw new Error("데이터를 불러올 수 없습니다.")
            }
            const datas = await response.json()
            console.log(datas)
            setAlbums(datas)
            // return datas;
        }
        getDatas().catch(console.error)
    
        console.log("리랜더링😎")
    
    }, [])

    const albumList = albums.map(({title}, i) => <li key={i}>{title}</li>)
    
    return (
        <div>
            {albumList}
        </div>
    );
};

export default SideEffectMount;