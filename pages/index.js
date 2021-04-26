import styles from '../styles/Home.module.scss'
import Base from '../Components/Base'
import Icon from '@material-ui/core/Icon'
import SearchIcon from '@material-ui/icons/Search'
import SortIcon from '@material-ui/icons/Sort'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Pagination from '../Components/Pagination'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { useEffect, useState } from 'react'

export default function Home({ data }) {
  const [userData, setUserData] = useState(data)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const getUsers = async () => {
    console.log('qurey', router.query.page)
    if (router.query.page !== undefined) {
      await fetch(`https://reqres.in/api/users?page=${router.query.page}`)
        .then((res) => res.json())
        .then((res) => {
          setUserData(res)
        })
    }
  }
  useEffect(() => getUsers(), [userData, router.query.page])

  return (
    <Base>
      <section className={styles.home}>
        <h1>Employees</h1>
        <div>
          <form>
            <input type='text' name='search' />
            <SearchIcon style={{ color: '#4ac2a2' }}></SearchIcon>
          </form>
          <Link href='/user/add'>
            <a>
              <AddCircleIcon
                style={{ color: '#4ac2a2' }}
                fontSize='large'
              ></AddCircleIcon>
            </a>
          </Link>
          <button>
            Filters
            <Icon>filter_alt</Icon>
          </button>
          <button>
            Sort
            <span>
              <SortIcon></SortIcon>
            </span>
          </button>
        </div>
      </section>
      <section className={styles.content}>
        <div>
          <span>
            {`Showing ${(userData.page - 1) * userData.per_page}-${
              (userData.page - 1) * userData.per_page + userData.per_page
            } of 
            ${userData.total} records`}
          </span>
          <Pagination data={userData}></Pagination>
          <form>
            <label htmlFor='noOfRecords'>Results per page </label>
            <input type='number' name='numberOfRecord' value={6} />
          </form>
        </div>
        {!userData.data.length ? (
          <div className={styles.loader}>
            {/* <CircularProgress style={{ color: '#4ac2a2' }} /> */}
            <img src='/loader.gif' />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>
                  <input type='checkbox' name='' />
                </th>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {userData.data.map((user) => {
                return (
                  <tr
                    key={user.id}
                    onClick={() => Router.push(`/user/${user.id}`)}
                  >
                    <td>
                      <input type='checkbox' name='' />
                    </td>
                    <td>#{user.id}</td>
                    <td>
                      <span>
                        <img src={user.avatar} alt='' />
                        {`${user.first_name} ${user.last_name}`}
                      </span>
                    </td>
                    <td>{user.email}</td>
                    <td>Apt. 556, Kulas Light, Gwenborough</td>
                    <td>+91 9986948235</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </section>
    </Base>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return { props: { data } }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://reqres.in/api/users/${context.query.page}`)
//   const data = await res.json()

//   return {
//     props: {
//       data,
//     },
//   }
// }
