import React, { useState } from 'react'
import Base from '../../../Components/Base'
import userStyles from '../../../styles/user.module.scss'
import CancelIcon from '@material-ui/icons/Cancel'
import { useRouter } from 'next/router'
import Link from 'next/link'

const index = ({ user }) => {
  const [userData, setUserData] = useState(user)
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const router = useRouter()

  const handleSubmit = () => {
    setIsSubmitClicked(true)
    setTimeout(() => setIsSubmitClicked(false), 3000)
  }

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Base>
      <section className={userStyles.user_form}>
        <h1>Employee Details</h1>
        <div>
          <img
            src={
              userData.avatar ??
              `https://www.w3schools.com/howto/img_avatar2.png`
            }
            alt={`${userData.first_name}'s photo`}
          />
          <form>
            <fieldset>
              <span>
                <label htmlFor='first_name'>First name</label>
                <br />
                <input
                  type='text'
                  name='first_name'
                  value={userData.first_name}
                  onChange={(e) => handleChange(e)}
                  id=''
                  required
                  readOnly={userData.first_name ? true : false}
                />
              </span>
              <span>
                <label htmlFor='last_name'>Last name</label>
                <br />
                <input
                  type='text'
                  name='last_name'
                  value={userData.last_name}
                  onChange={(e) => handleChange(e)}
                  readOnly={userData.last_name ? true : false}
                  id=''
                />
              </span>
            </fieldset>
            <fieldset>
              <span>
                <label htmlFor='email'>Email</label> <br />
                <input
                  type='email'
                  name='email'
                  id=''
                  value={userData.email}
                  onChange={(e) => handleChange(e)}
                  readOnly={userData.email ? true : false}
                />
              </span>
              <input type='file' name='avatar' id='' accept='image/*' />
            </fieldset>
            <Link href='/'>Back</Link>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </section>
      {isSubmitClicked && (
        <section className={userStyles.popup}>
          {/* <span>
          <CancelIcon style={{ color: '155724' }} />
        </span> */}
          <h3>Submitted successfully!</h3>
        </section>
      )}
    </Base>
  )
}

export default index

export const getStaticPaths = async () => {
  var res = await fetch('https://reqres.in/api/users')
  const pg1 = await res.json()
  res = await fetch('https://reqres.in/api/users?page=2')
  const pg2 = await res.json()
  const users = pg1.data.concat(pg2.data)
  console.log(users)
  const paths = users.map((user) => ({ params: { id: user.id.toString() } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://reqres.in/api/users/${context.params.id}`)
  const data = await res.json()
  const user = data.data
  return {
    props: {
      user,
    },
  }
}
