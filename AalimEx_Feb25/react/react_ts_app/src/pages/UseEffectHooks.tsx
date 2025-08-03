import React, { useEffect, useState } from 'react';

const UseEffectHooks: React.FC = () => {

    // useEffect(callBackFn, deps)

    const [count, setCount] = useState<number>(0)
    const [isSaved, setIsSaved] = useState<boolean>(false)

    // every re render this will call
    useEffect(() => {
        console.log("useEffect call without deps")
    })

    // only first render this will call
    useEffect(() => {
        console.log("useEffect call with empty deps")
    }, [])
    
    useEffect(() => {
        console.log("useEffect call with deps", isSaved)
    }, [isSaved])

    return (
        <>
            <h1>Use Effect hook</h1>
            <p>
                <b>Count: {count}</b>
            </p>

            <input className='btn btn-primary' type="button" value="Trigger" onClick={() => { setCount(count + 1) }} />
            <input className='btn btn-danger' type="button" value="Save" onClick={() => { setIsSaved(!isSaved) }} />

        </>
    )
}

export default UseEffectHooks;