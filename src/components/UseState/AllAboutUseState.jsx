import { useState } from "react"

const thisFuntion = () => {
    console.log("this function")
    return 4
}

const AllAboutUseState = () => {

    // const [count, setCount] = useState(()=>thisFuntion())
    // const [count, setCount] = useState(4)
    const [state, setCount] = useState({ count: 4, theme: 'blue' })

    const handleDecrement = () => {
        setCount(state => {
            return { ...state, count: state.count - 1 }
        })
    }

    const handleIncreament = () => {
        setCount(state => {
            return { ...state, count: state.count + 1 }
        })
    }


    return (<>
        <button onClick={handleDecrement}> - </button>
        <span> {state.count} - {state.theme} </span>
        <button onClick={handleIncreament}> + </button>
    </>)
}

export default AllAboutUseState