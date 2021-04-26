import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Head from 'next/head'
import baseStyles from '../styles/Base.module.scss'

const Base = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard: Jumky Jewellery</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Sidebar></Sidebar>
      <div className={baseStyles.base}>{children}</div>
    </Fragment>
  )
}

export default Base
