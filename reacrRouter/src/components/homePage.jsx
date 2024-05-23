import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getUsersToList, usersArray } from './userList'

const HomePage = () => {
  const [usersData, setUsersData] = useState()

  useEffect(() => {
   const aux = getUsersToList()
   setUsersData(aux)
  },[])
  return (
    <div>
      <b>home page</b>
      <Link to={"/register"}>
        <button>
          register
        </button>
      </Link>
      {!usersData?
       (<div>no hay usuarios</div>)
      : (usersData.map(u => (
        <div>
          <p>{u.dni}</p>
          <p>{u.nombre}</p>
          <p>{u.apellido}</p>
          <p>{u.email}</p>
          <p>{u.password}</p>
        </div>
      )))}
    </div>
  )
}

export default HomePage
