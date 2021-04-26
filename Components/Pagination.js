import React, { useEffect } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import paginationStyles from '../styles/Pagination.module.scss'
import Link from 'next/link'

const Pagination = ({ data }) => {
  const getPageNumbers = () => {
    const pageNumbers = []
    for (var i = 1; i <= data.total_pages; i++) {
      pageNumbers.push(
        <Link href={{ pathname: '/', query: { page: i } }}>
        <li
          key={i}
          className={data.page === i ? paginationStyles.active : null}
          // onClick={() => Router.push({ pathname: '/', query: { page: i } })}
        >
          {i}
        </li>
        </Link>
      )
    }
    return pageNumbers
  }

  return (
    <span className={paginationStyles.pagination}>
      <ChevronLeftIcon style={{ cursor: 'pointer' }} />
      <ul>{getPageNumbers()}</ul>
      <ChevronRightIcon style={{ cursor: 'pointer' }} />
    </span>
  )
}

export default Pagination
