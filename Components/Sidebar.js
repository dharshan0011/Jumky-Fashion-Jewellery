import React, { useEffect, useState } from 'react'
import navStyles from '../styles/Sidebar.module.scss'
import Icon from '@material-ui/core/Icon'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import BarChartIcon from '@material-ui/icons/BarChart'

const Sidebar = () => {
  return (
    <nav className={navStyles.sidebar}>
      <picture>
        <source
          media='(min-width:1080px)'
          srcset='/logo.png'
          // alt='Jumkey Jwellery'
        />
        <source
          media='(max-width:1080px)'
          srcset='/logo_small.png'
          // style={{width}}
        />
        <img src='/logo_small.png' alt='Jumkey Jwellery' />
      </picture>
      <ul>
        <li>
          <span>
            <HomeIcon></HomeIcon>
          </span>
          <span className={navStyles.nav_link}>Home</span>
        </li>
        <li className={navStyles.active}>
          <Icon>badge</Icon>

          <span className={navStyles.nav_link}>Employees</span>
        </li>
        <li>
          <span>
            <GroupIcon></GroupIcon>
          </span>
          <span className={navStyles.nav_link}>Customers</span>
        </li>
        <li>
          <span>
            <LocalMallIcon></LocalMallIcon>
          </span>
          <span className={navStyles.nav_link}>Products</span>
        </li>
        <li>
          <span>
            <ShoppingCartIcon></ShoppingCartIcon>
          </span>
          <span className={navStyles.nav_link}>Orders</span>
        </li>
        <li>
          <span>
            <BarChartIcon></BarChartIcon>
          </span>
          <span className={navStyles.nav_link}>Stats</span>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
