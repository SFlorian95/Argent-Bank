import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: { isEditing: false },
  reducers: {
    toggleIsEditing: (state) => {
      state.isEditing = !state.isEditing
    },
  },
})

export const { toggleIsEditing } = profileSlice.actions

export default profileSlice.reducer

export const selectIsEditing = (state) => state.profile.isEditing
