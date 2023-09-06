import { useEffect, useState } from "react"
import axios from 'axios'

function useUser(userName) {
    const [user, setUser] = useState({})
    // let x = 5
    const data = async () => {
        const fetchData = await axios.get(`https://api.github.com/users/${userName}`)
        // console.log(fetchData)
        const userData = {
            name: fetchData.data.name,
            image: fetchData.data.avatar_url,
            id: fetchData.data.id,
            username: fetchData.data.login
        }
        // console.log(userData)
        setUser(userData)
    }
    useEffect(() => {
        data()
    }, [userName])

    return user
}


export default useUser