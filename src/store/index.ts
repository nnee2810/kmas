import { combineReducers, configureStore } from "@reduxjs/toolkit"
import settingsReducer from "./reducers/settings"
import userReducer from "./reducers/user"

const store = configureStore({
  reducer: combineReducers({
    user: userReducer,
    settings: settingsReducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
