import React from 'react'
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
      <img src='/logo.png' alt='Jumkey Jwellery' />
      <ul>
        <li>
          <span>
            <HomeIcon></HomeIcon>
          </span>
          Home
        </li>
        <li className={navStyles.active}>
          <span>
            <Icon>badge</Icon>
          </span>
          Employees
        </li>
        <li>
          <span>
            <GroupIcon></GroupIcon>
          </span>
          Customers
        </li>
        <li>
          <span>
            <LocalMallIcon></LocalMallIcon>
          </span>
          Products
        </li>
        <li>
          <span>
            <ShoppingCartIcon></ShoppingCartIcon>
          </span>
          Orders
        </li>
        <li>
          <span>
            <BarChartIcon></BarChartIcon>
          </span>
          Stats
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
