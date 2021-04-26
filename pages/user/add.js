import React, { useState } from 'react'
import Base from '../../Components/Base'
import userStyles from '../../styles/user.module.scss'
import { useRouter } from 'next/router'

const add = () => {
  const [userData, setUserData] = useState({
    // first_name: '',
    // last_name: '',
    // email: '',
    // avatar: null,
  })
  const [isSubmitClicked, setIsSubmitClicked] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitClicked(true)
    setTimeout(() => setIsSubmitClicked(false), 2000)
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
          <form onSubmit={(e) => handleSubmit(e)}>
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
                />
              </span>
              <input type='file' name='avatar' id='' accept='image/*' />
            </fieldset>
            <button onClick={() => window.history.back()}>Back</button>
            <button type='submit'>Submit</button>
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

export default add
