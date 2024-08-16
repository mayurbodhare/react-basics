import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mayurbodhare')
    //     .then(response => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

    const data = useLoaderData();
  return (
    <div className='bg-gray-600 text-white text-center text-3xl relative p-4 my-4 mx-10 w-auto'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Profile Image"/>
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response =await fetch('https://api.github.com/users/mayurbodhare');
    return response.json();
}