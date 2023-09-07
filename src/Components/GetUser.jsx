import { useEffect, useState } from "react"
import useUser from "../Hooks/useUser"
import useDebounce from "../Hooks/useDebounce"
import { Link } from "react-router-dom"
import CardLoading from "./CardLoading"

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

    const { image, name, id, username, profile } = userData.user

    return (
        <>
            <div className="main flex flex-col items-center justify-center">
                <p className="text-white font-semibold tracking-wider text-2xl bg-[#313131] w-screen text-center p-3 shadow-sm shadow-[#955dc3] mb-4">Github UserData Hub</p>
                <div>
                    <input className="shadow-md shadow-[#955dc3] bg-white outline-none rounded-[4px] p-2 py-1 text-[1.2rem] tracking-wide w-[20rem]" type="text"
                        onChange={debounce}
                        placeholder="Search Username ..."
                    />
                </div>
                {validate ? <CardLoading notify="Search Username!" /> :
                    (userData.user.error === 404 ? <CardLoading notify="OOPS! No data Found" />
                        : (userData.loading === true ? <CardLoading /> :
                            <span className="relative flex shadow-sm shadow-[#955dc3]">
                                <span className="animate-ping absolute top-8 left-5 inline-flex h-3 w-3 rounded-full bg-[#00fff2] opacity-75"></span>
                                <span className="relative inline-flex top-8 left-5 rounded-full h-3 w-3 bg-[#00fff2]"></span>
                                <div className="bg-[#1b1b1b] flex flex-col items-center w-fit p-4 rounded-md mt-5 py-6">
                                    <img className="w-[12rem] h-[12rem] rounded-full border-[3px] border-[#6366F1] shadow-lg" src={image} alt="" />
                                    <div className="text-white text-[1.11rem] tracking-wide text-center my-5 p-3 py-5 bg-[#232323] min-w-[19rem] rounded">
                                        <p className=" bg-[#2e2e2e] min-w-[18rem] max-w-[18rem] rounded-[8px] p-[5px]">{name}</p>
                                        <p className="bg-[#2e2e2e] min-w-[18rem] rounded-[8px] my-[8px] p-[5px]">Id: {id}</p>
                                        <p className="bg-[#2e2e2e] min-w-[18rem] mb-[0.8rem] rounded-[8px] p-[5px]">UserName: {username}</p>
                                        <Link className="bg-[#6366F1] px-[6rem]  rounded-[6px] p-[5px] font-semibold hover:bg-[#797bf6] duration-200" to={profile}>Visit Profile</Link>
                                    </div>

                                </div>
                            </span>
                        ))}</div>

        </>
    )
}

export default GetUser
