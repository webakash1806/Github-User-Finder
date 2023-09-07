import { useEffect, useState } from "react"
import useUser from "../Hooks/useUser"
import useDebounce from "../Hooks/useDebounce"

const GetUser = () => {

    const [input, setInput] = useState('')
    const [validate, setValidate] = useState(false)
    const debounce = useDebounce((e) => setInput(e.target.value))

    const userData = useUser(input)
    console.log(userData)

    const dataValidation = () => {
        if (input === '') {
            // console.log("1")
            setValidate(true)
        }
        else {
            // console.log(3)
            setValidate(false)
        }
    }

    useEffect(() => {
        dataValidation()
    }, [input])

    const { image, name, id, username } = userData.user

    return (
        <>
            <div className="main flex flex-col items-center justify-center">
                <div>
                    <input className="bg-slate-500" type="text"
                        onChange={debounce}
                    />
                </div>
                {validate ? <div>some</div> :
                    (userData.user.error === 404 ? <div>error</div>
                        : (userData.loading === true ? "loading" :
                            <div className="bg-[#1b1b1b] flex flex-col items-center w-fit p-4 rounded-md m-4">
                                <img className="w-[19.5rem] h-[19.5rem] rounded shadow-md" src={image} alt="" />
                                <div className="text-white text-[1.11rem] tracking-wide text-center my-5 p-3 py-5 bg-[#232323] min-w-[19rem] rounded">
                                    <p className=" bg-[#2e2e2e] min-w-[18rem] max-w-[18rem] rounded p-[7px]">{name}</p>
                                    <p className="bg-[#2e2e2e] min-w-[18rem] rounded my-[8px] p-[7px]">Id: {id}</p>
                                    <p className="bg-[#2e2e2e] min-w-[18rem] rounded p-[7px]">UserName: {username}</p>
                                </div></div>
                        ))}</div>
        </>
    )
}

export default GetUser
