import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../auth/authSlice'
import EditProfile from '../EditProfile/EditProfile'
import './Welcome.scss'

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        <span>`${user.firstName} ${user.lastName}!`</span>
      </h1>
      <EditProfile user={user} />
    </div>
  )
}

export default Welcome
