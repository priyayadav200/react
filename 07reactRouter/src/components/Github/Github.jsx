import React from 'react'
// import { useState } , {useEffect} from 'react'

import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data , setData] = useState([])

    // useEffect(() =>{
    //     fetch('https://api.github.com/users/priyayadav200')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //        setData(data)
    //     })

    // } , [])
    const data =  useLoaderData();
  return (
    <div>
      Github Followers : {data.followers}
        <br />
        Github Following : {data.following}
        <br />
        Github Public Repos : {data.public_repos}
        <img src={data.avatar_url} alt="github profile" width={'200px'} />
    </div>
  )
}

export default Github



