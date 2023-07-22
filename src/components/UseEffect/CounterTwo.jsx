import React, { useEffect, useState } from 'react'

const CounterTwo = () => {
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('This Count changed')
        document.title = `Count : ${count}`
    }, [count])
    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button
                onClick={() => {
                    setCount((count) => count + 1)
                }}
            >
                Count:{count}
            </button>
        </div>
    )
}

export default CounterTwo
