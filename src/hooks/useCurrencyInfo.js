import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
  useEffect(() => {
    const getCurrencyData = async () => {
        const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        let data = await res.json();
        console.log(data[currency]);
        data=setData(data[currency])
    };
    getCurrencyData();
    
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
