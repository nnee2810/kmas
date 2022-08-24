import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILesson, IProfile } from "interfaces/"
import { RootState } from "store"

interface UserState {
  profile: IProfile | null
  lessons: ILesson[]
}

const initialState: UserState = {
  profile: null,
  lessons: [],
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<Partial<UserState>>) {
      return {
        ...state,
        ...payload,
      }
    },
    signOut() {
      return initialState
    },
  },
})

export const userSelector = (state: RootState) => state.user
export const { setUser, signOut } = userSlice.actions
export default userSlice.reducer
