import React from 'react'
import { NavLink } from 'react-router-dom'
import './Styles/Nav.css'

export default function Nav() {
  return (
    <div>
      <nav>
            <ul>
                <NavLink to="/" >Home</NavLink>&emsp;&emsp;&emsp;&emsp;
                <NavLink to="/calculator" >Calculator</NavLink>&emsp;&emsp;&emsp;&emsp;
                <NavLink to="/profile">Profile</NavLink>
            </ul>
        </nav>
    </div>
  )
}
