import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
// import profileReducer from '../features/profile/profileSlice'

const logMiddleware = (store) => (next) => (action) => {
  // on affiche chaque action dans la console
  console.log(action)
  return next(action)
}

export default configureStore({
  reducer: {
    auth: authReducer,
    // profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logMiddleware,
  ],
})
