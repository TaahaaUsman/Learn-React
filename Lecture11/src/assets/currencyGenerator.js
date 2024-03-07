import { useEffect, useState } from "react";


function currency_generator(currency){
    let [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/cd897a748f188bf1167b11cf/latest/{currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
        console.log(data);
    }, [currency])
    console.log(data);
    return data;
}

export default currency_generator;