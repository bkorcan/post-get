import { useEffect } from "react";
import { useStore } from '../components/state'

export default function Get() {

    const setNameGet = useStore(state => state.setNameGet)
    const setCallGet = useStore(state => state.setCallGet)
    const nameGet = useStore(state => state.nameGet)

    useEffect(
        async () => {
            setCallGet(false)
            const res = await fetch('/api/get_villa', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.status === 500) {
                console.log(res.text())
            }

            if (res.status === 200) {
                console.log("GET status 200")
                setNameGet((await res.json()))
                setCallGet(false)
                // console.log((await res.json()))
            }
        }, []
    )

    return <></>
        
    
}