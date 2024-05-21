import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <b>no funciona error 400</b>
      <Link to={"/login"}>login</Link>
    </div>
  )
}

export default NotFoundPage
