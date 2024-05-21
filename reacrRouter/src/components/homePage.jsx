import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <b>home page</b>
      <Link to={"/login"}>login</Link>
    </div>
  )
}

export default HomePage
