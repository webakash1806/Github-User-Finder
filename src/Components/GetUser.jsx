import useUser from "../Hooks/useUser"

const GetUser = () => {

    const name = 'webakash1806'

    const userData = useUser(name)
    console.log(userData)
    return (
        <div>
            hye
        </div>
    )
}

export default GetUser
