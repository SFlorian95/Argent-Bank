import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import './Header.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCurrentUser,
  selectCurrentToken,
  logOut,
} from '../../features/auth/authSlice'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link
          className="main-nav-item"
          to={token && user ? '/profile' : '/login'}
        >
          <i className="fa fa-user-circle"></i>
          {user ? user.firstName : 'Sign In'}
        </Link>
        {token ? (
          <Link
            className="main-nav-item"
            to="/"
            onClick={() => dispatch(logOut())}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          <></>
        )}
      </div>
    </nav>
  )
}
export default Header
