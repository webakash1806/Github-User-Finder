import { useEffect, useState } from "react"
import axios from 'axios'

function useUser(userName) {
    const [user, setUser] = useState({})
    // let x = 5
    const data = async () => {
        try {
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
        catch (e) {
            console.log(e)
            const errorData = {
                error: e
            }
            setUser(errorData)
        }

    }
    useEffect(() => {
        data()
    }, [userName])

    return user
}


export default useUser