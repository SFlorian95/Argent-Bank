import './Login.scss'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import { login } from '../authApi'
import { setAccessToken } from '../authSlice'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUserNameInput = (e) => setEmail(e.target.value)

  const handlePasswordInput = (e) => setPassword(e.target.value)

  const loginMutation = useMutation(login, {
    onSuccess: (data) => {
      dispatch(setAccessToken(data.body.token))
      navigate('/profile')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    loginMutation.mutate({ email, password })
  }

  return (
    <div className="signin main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        {loginMutation.isLoading ? (
          <p>loading...</p>
        ) : (
          <>
            {loginMutation.isError ? (
              <p>
                {loginMutation.error.response.data?.message ||
                  loginMutation.error.message}
              </p>
            ) : null}
            {loginMutation.isSuccess ? (
              <p>{loginMutation.data.message}</p>
            ) : null}
          </>
        )}
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={handleUserNameInput}
              value={email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePasswordInput}
              value={password}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </div>
  )
}

export default Signin
