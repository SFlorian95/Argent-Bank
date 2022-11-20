import './EditProfile.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCurrentUser,
  selectCurrentToken,
  setUser,
} from '../../auth/authSlice'
import { toggleIsEditing } from '../profileSlice'
import { useMutation } from 'react-query'
import { updateProfile } from '../profileApi'

const EditProfile = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const handleFirstNameInput = (e) => setFirstName(e.target.value)
  const handleLastNameInput = (e) => setLastName(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit', token)
    updateProfileMutation.mutate({ firstName, lastName, token })
  }

  const updateProfileMutation = useMutation(updateProfile, {
    onSuccess: (data) => {
      dispatch(toggleIsEditing())
      dispatch(setUser(data.body))
    },
  })

  return (
    <form className="form-edit-profile" onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          onChange={handleFirstNameInput}
          value={firstName}
          placeholder={user?.firstName}
          required
        />
        <input
          type="text"
          onChange={handleLastNameInput}
          value={lastName}
          placeholder={user?.lastName}
          required
        />
      </div>
      <div className="row">
        <button className="button-edit-profile">Save</button>
        <button
          className="button-edit-profile"
          onClick={() => dispatch(toggleIsEditing())}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default EditProfile
