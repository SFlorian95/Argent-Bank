import { post, put } from '../../common/apiHandler'

const API_URL = 'http://localhost:3001/api/v1'
const profileUrl = `${API_URL}/user/profile`

/**
 * Get user information details in function of access token in header request
 * @param {String} token - access Token
 * @returns {Object} Returns user data
 */
const getProfile = (token) =>
  post(profileUrl, {}, { token }).then((res) => res.data)

/**
 * Update first and last name of the user holding the access token
 * @param {Object} param0 { firstName, lastName }
 * @prop {String} param0.firstName - The first name of the user
 * @prop {String} param0.lastName - The last name of the user
 * @prop {String} token - access Token
 * @returns
 */
const updateProfile = ({ firstName, lastName, token }) =>
  put(profileUrl, { firstName, lastName }, { token }).then((res) => res.data)

export { getProfile, updateProfile }
