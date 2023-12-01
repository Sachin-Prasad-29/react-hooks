import React, { useState, useEffect } from 'react'

const AllUseEffect = () => {

    // const [data, setData] = useState('posts')
    // const [res, setRes] = useState([])
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${data}`)
    //         .then(response => response.json())
    //         .then(json => setRes(json))
    // }, [data])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => { // cleanup function
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            {/* <div>

                <button onClick={() => setData('posts')}>posts</button>
                <button onClick={() => setData('users')}>users</button>
                <button onClick={() => setData('comments')}>comments</button>
            </div>
            <div>
                <h1>{data}</h1>
                {res.map(item => {
                    return <div key={JSON.stringify(item)}>{JSON.stringify(item)}
                    </div>
                })}
            </div> */}

            {windowWidth}

        </div >
    )
}

export default AllUseEffect