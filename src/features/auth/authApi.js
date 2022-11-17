import { post, put } from '../../common/apiHandler'

const API_URL = 'http://localhost:3001/api/v1'
const loginUrl = `${API_URL}/user/login`
const profileUrl = `${API_URL}/user/profile`

/**
 * Check if the username and password given are valid on the server
 * @param {Object} param0 { email, password }
 * @prop {String} param0.email - The email of the user
 * @prop {String} param0.password - The password of the user
 * @returns {Object} Returns access token
 */
const login = ({ email, password }) =>
  post(loginUrl, { email, password }).then((res) => res.data)

const connection = ({token}) =>
  post(profileUrl, {token}).then((res) => res.data)

const editAccount = ({firstName, lastName}, token) => {
  put(profileUrl, {firstName, lastName}, token)
} 
export { login, connection, editAccount }
