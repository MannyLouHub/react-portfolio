import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
      <div className={'container-fluid'}>
        <nav className="row navbar navbar-expand-lg navbar-light bg-dark">
          <a className="p-1 nav-link col-12 col-md-3 text-center justify-content-center name "
             href="./index.html">Manny
            Lou</a>
          <div className="col-12 col-md-9 text-center d-flex justify-content-center justify-content-md-end">
            <ul className='nav'>
              <li className={'nav-item p-1'}>
                <NavLink
                    to='/HomePage'
                    onClick={() => props.handlePageChange('HomePage')}
                    className={"Nav-Link"}>
                  About Me
                </NavLink>
              </li>
              <li className={'nav-item p-1'}>
                <NavLink
                    to='/Portfolio'
                    onClick={() => props.handlePageChange('Portfolio')}
                    className={"Nav-Link"}>
                  Portfolio
                </NavLink>
              </li>
              <li className={'nav-item p-1'}>
                <NavLink
                    to='/ContactPage'
                    onClick={() => props.handlePageChange('ContactPage')}
                    className={"Nav-Link"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )

}
export default Navbar;