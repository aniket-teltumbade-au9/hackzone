import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/color.scss'
import menu from '../../../assets/svg/hamburger.svg'
import close from '../../../assets/svg/close.svg'

function Navbar(props) {


  const [toggle, setToggle] = useState(false)
  return (
    <>
      <nav className="text-light bg-hacktone">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="navbar col-md-7">
            <span className="navbar-brand mb-0 h1">HackerZone</span>
            {toggle === true ?
              <button className="btn btn-hack d-sm-block d-md-none">
                <img className="hz-toogle" src={close} onClick={() => setToggle(false)} height="30" width="30" alt="close" />
              </button>
              :
              <button className="btn btn-hack d-sm-block d-md-none">
                <img className="hz-toogle" src={menu} onClick={() => setToggle(true)} height="30" width="30" alt="menu" />
              </button>
            }
          </div>
          <div className="d-none col-md-5 h-100 d-md-flex justify-content-between align-items-center">
            <Link className="hz-link" to='/'>Home</Link>
            <Link className="hz-link" to='/contests'>Compete</Link>
            <button className="btn btn-hack" onClick={props.handleLogout}>
              {props.userData ? props.userData.full_name : "Guest"}
            </button>
          </div>
        </div>
      </nav>
      {toggle ? (
        <div className="d-flex col-12 d-md-none flex-column justify-content-around align-items-center text-light bg-hacktone hz-mobile-menu">
          <Link className="hz-link hz-mobile-menu-item" to='/'>Home</Link>
          <Link className="hz-link hz-mobile-menu-item" to='/contests'>Compete</Link>
          <button className="btn btn-hack col-12 d-flex justify-content-center align-items-center" style={{ maxHeight: "56px" }} onClick={props.handleLogout}>
            {props.userData ? props.userData.full_name : "Guest"}
          </button>
        </div>
      ) : null
      }
    </>
  )
}
export default Navbar