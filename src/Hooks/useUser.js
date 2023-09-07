import { useEffect, useState } from "react"
import axios from 'axios'

function useUser(userName) {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    // let x = 5
    const data = async () => {
        try {
            setLoading(true)
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
            setLoading(false)
        }
        catch (e) {
            setLoading(true)
            console.log(e)
            const errorData = {
                error: 404
            }
            setUser(errorData)
            setLoading(false)
        }

    }
    useEffect(() => {
        data()
    }, [userName])

    return { user, loading }
}


export default useUser