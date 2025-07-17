import { use, useEffect, useState } from "react"

function useCurrencyInfo(currency){
    // [] dependency Array, if some changes will come it will show up here
   const [ data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_XUBgXmKvFB7nJqV4i1EfmbW1AiA9Akd5ym5jpwm0&base_currency=${currency}')
        .then((res)=>res.json)
        .then((res) => setData(res[currency]) )
        console.log(data)
    }, [currency])
        console.log(data)
   
    return data
}

export default useCurrencyInfo;