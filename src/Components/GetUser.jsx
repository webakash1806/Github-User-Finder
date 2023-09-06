import { useState } from "react"
import useUser from "../Hooks/useUser"
import useDebounce from "../Hooks/useDebounce"

const GetUser = () => {

    const [input, setInput] = useState('')
    const debounce = useDebounce((e) => setInput(e.target.value))

    const userData = useUser(input)
    console.log(userData)



    return (
        <>
            <div className="main">
                <div>
                    <input className="bg-slate-500" type="text"
                        onChange={debounce}
                    />
                </div>
                {input === '' ? "Write Something" : "Data"}</div>
        </>
    )
}

export default GetUser
