import { useState } from 'react'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { editAccount } from '../../auth/authApi'
import { selectCurrentToken, setUser } from '../../auth/authSlice'
import './EditProfile.scss'

const EditProfile = ({ user }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const handleFirstnameInput = (e) => setFirstname(e.target.value)

  const handleLastnameInput = (e) => setLastname(e.target.value)

  const editMutation = useMutation(editAccount, {
    onSuccess: (data) => {
        dispatch(setUser(data.body))
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    editMutation.mutate({firstname, lastname}, selectCurrentToken)
  }

  return open ? (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          onChange={handleFirstnameInput}
          value={firstname}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          onChange={handleLastnameInput}
          value={lastname}
        />
      </div>
      <div className='button-wrapper'>
        <button className="edit-button" type='submit'>Save</button>
        <button className="edit-button" onClick={!setOpen}>Cancel</button>
      </div>
    </form>
  ) : (
    <button className="edit-button" onClick={!setOpen}>
      Edit Name
    </button>
  )
}

export default EditProfile
