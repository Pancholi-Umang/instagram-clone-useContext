import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const providedata = createContext();


const Context = (props) => {

    const [userData, setUserData] = useState([]);
    const [loginToggle, setLoginToggle] = useState(false)
    const GetUsers = () => {
      axios.get(`https://644f9340ba9f39c6ab66e61a.mockapi.io/users`)
      .then((res)=> setUserData(res?.data))
    }
    useEffect(()=>{
      GetUsers();
    },[])
  return (
    <providedata.Provider value={{userData}}>
        {props.children}
    </providedata.Provider>
  )
}

export default Context