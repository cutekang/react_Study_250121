import  {createContext, useState} from 'react'

// const FontContext = createContext({
//     fontSize : "2rem",
//     fontWeight : 500,
//     color : "blue"
// })

const FontContext = createContext({
    state : {fontSize : ""},
    action : {setFontSize : () => {}},

    colorState : {color : ""},
    colorAction : {setColor : () => {}}
})

const FontSizeProvider = ({children}) => {
    const [fontSize,setFontSize] = useState("2rem");
    const [color,setColor] = useState("red");

    const value = {
        state : { fontSize },
        action : { setFontSize },

        colorState : {color},
        colorAction : {setColor}
    }
    return (
        <FontContext.Provider value={value}>
            {children}
        </FontContext.Provider>
    )
}

const FontSizeConsumer = FontContext.Consumer

export {FontContext, FontSizeProvider, FontSizeConsumer};

// export default FontContext;