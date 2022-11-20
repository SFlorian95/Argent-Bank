import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../auth/authSlice'
import { selectIsEditing, toggleIsEditing } from './profileSlice'
import EditProfile from './EditProfile/EditProfile'

const Welcome = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const isEditing = useSelector(selectIsEditing)

  const welcome = user ? `${user.firstName} ${user.lastName}!` : 'Welcome!'

  const content = (
    <section className="welcome">
      <h1>
        Welcome back
        <br />
        {isEditing ? <></> : welcome}
      </h1>
      {isEditing ? (
        <EditProfile />
      ) : (
        <button
          className="edit-button"
          onClick={() => dispatch(toggleIsEditing())}
        >
          Edit Name
        </button>
      )}
    </section>
  )

  return content
}
export default Welcome
