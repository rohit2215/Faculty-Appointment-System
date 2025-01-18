import React from 'react'
import {assets} from "../assets/assets_frontend"
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <img src={assets.logo} alt='' />
      <ul>
        <NavLink>
            <li>
                HOME
            </li>
        </NavLink>
        <NavLink>
            <li>
                ALL FACULTIES
            </li>
        </NavLink>
        <NavLink>
            <li>
                ABOUT
            </li>
        </NavLink>
        <NavLink>
            <li>
                CONTACT
            </li>
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default NavBar
