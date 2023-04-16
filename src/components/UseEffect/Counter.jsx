import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    })

    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>Count : {count}</button>
        </div>
    )
}

export default Counter
