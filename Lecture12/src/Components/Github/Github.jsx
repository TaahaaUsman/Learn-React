import { useEffect, useState } from "react"
import React from 'react' 
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/TaahaaUsman')
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

  return (
    <div className='bg-blue-500 p-6 text-white text-3xl my-28 text-center '>
    Github Followers: {data.followers}
    <img className="" src={data.avatar_url} alt="" width={300}/>
    <h2 className="text-green-900">Name : {data.name}</h2>
    <p className="inline-block">{data.bio}</p>
</div>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/TaahaaUsman');
    return response.json();
}

