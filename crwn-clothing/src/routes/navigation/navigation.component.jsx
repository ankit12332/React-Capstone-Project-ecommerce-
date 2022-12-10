import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/083 crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' ></CrwnLogo>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                   <h3>SHOP</h3> 
                </Link>
                <Link className='nav-link' to='/signIn'>
                   <h3>SIGN IN</h3> 
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation