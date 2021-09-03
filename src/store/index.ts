import { combineReducers, configureStore } from "@reduxjs/toolkit"
import settingReducer from "./reducers/setting"
import userReducer from "./reducers/user"

const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
    setting: settingReducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
