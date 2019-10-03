import react from "react"
import { Link } from "react-router-dom"

import React from "react"

const nav = () => {
  return (
    <>
      <nav>
        <h3>Nav bar</h3>
        <ul className='nav-links'>
          <Link to='/component/Journal'>
            <li>Journal</li>
          </Link>
          <Link>
            <li></li>
          </Link>
          <Link>
            <li></li>
          </Link>
          <Link>
            <li></li>
          </Link>
          <Link>
            <li></li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default nav
