import { useEffect , useState } from "react";

function useCurrencyinfo(currency){
    const [data , setData] = useState({})
 useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}
`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
    
 },[currency])
 console.log(data);
 
}
export default useCurrencyinfo ;