import { useEffect, useState } from "react"
import useUser from "../Hooks/useUser"
import useDebounce from "../Hooks/useDebounce"

const GetUser = () => {

    const [input, setInput] = useState('')
    const [errorValidate, setErrorValidate] = useState(false)
    const debounce = useDebounce((e) => setInput(e.target.value))
    // console.log(debounce)
    // const name = 'webakash1806'
    // console.log(input)
    const userData = useUser(input)
    console.log(userData.error.name)

    console.log(input)

    // console.log(useUser.name)

    // console.log(userData.name)

    useEffect(() => {
        if (userData.name === undefined) {
            setErrorValidate(true)
        }
        // if ()
    }, [errorValidate])



    return (
        <>
            <div className="main">
                <div>
                    <input className="bg-slate-500" type="text"
                        onChange={debounce}
                    />
                </div>
                {errorValidate ? "error" : "hello"}</div>
        </>
    )
}

export default GetUser
