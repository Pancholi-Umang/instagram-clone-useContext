import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const providedata = createContext();


const Context = (props) => {

  const create = (data) => {
    console.log(data)
    axios.post(`https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts`,data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

    const [userData, setUserData] = useState([]);
    const GetUsers = () => {
      axios.get(`https://644f9340ba9f39c6ab66e61a.mockapi.io/users`)
      .then((res)=> setUserData(res?.data))
    } 
    useEffect(()=>{
      GetUsers();
    },[])
  return (
    <providedata.Provider value={{userData, create}}>
        {props.children}
    </providedata.Provider>
  )
}

export default Context