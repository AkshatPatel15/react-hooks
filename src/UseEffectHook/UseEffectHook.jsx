import { useEffect, useState } from "react"

const UseEffectHook = (() => {
    const [click,setClick] = useState(1)
    useEffect(() => {
        document.title = click
    })
    return (<div>
        <ul>{click}</ul>
        <button onClick={() => setClick(click+1)}>Submit</button>
        </div>)
})

export default UseEffectHook;