import { useEffect, useState } from 'react'
const useFetch = (url) => {

    const [data, setdata] = useState(null)
    const [isPending, setisPending] = useState(true)


    useEffect(() => {

        const abortCont = new AbortController()
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => { return res.json() })
                .then(data => {
                    setdata(data)
                    setisPending(false)
                })
        }, 1000)
        return () => abortCont.abort();
    }, [url])
    return { data, isPending }
}
export default useFetch