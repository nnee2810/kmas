import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import API from "configs/network"
import { HTTP_OK, HTTP_UNAUTHORIZED, TOKEN } from "defines/common"
import { LoginProps } from "hooks/useAuth"
import md5 from "md5"
import { toast } from "react-toastify"
import { RootState } from "store"

export const fetchLogin = createAsyncThunk("user/fetchLogin", async (_, { rejectWithValue }) => {
  try {
    const res = await API.get("/profile")
    return res
  } catch (err) {
    return rejectWithValue(1)
  }
})
export const postLogin = createAsyncThunk(
  "user/postLogin",
  async ({ username, password }: LoginProps, { rejectWithValue }) => {
    try {
      const res = await API.post("/login", { username, password: md5(password) })
      return res
    } catch (err) {
      console.log(err)

      return rejectWithValue(1)
    }
  }
)

const initialState = {
  postLoginLoading: false,
  loggedIn: false,
  profile: {
    displayName: "",
    studentCode: "",
    gender: "",
    birthday: "",
  },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogout(state, { payload }) {
      localStorage.removeItem(TOKEN)
    },
  },
  extraReducers: {
    [postLogin.pending.toString()]: (state) => {
      state.postLoginLoading = true
    },
    [postLogin.fulfilled.toString()]: (state, { payload }) => {
      switch (payload.status) {
        case HTTP_OK: {
          const {
            data: { profile, token },
          } = payload

          state.loggedIn = true
          state.profile = profile
          localStorage.setItem(TOKEN, token)
          toast.success(`Xin chào ${profile.displayName}`)

          break
        }
        case HTTP_UNAUTHORIZED: {
          toast.error("Tài khoản hoặc mật khẩu không chính xác")
          break
        }
        default:
          break
      }
      state.postLoginLoading = false
    },
    [postLogin.rejected.toString()]: (state, { payload }) => {
      toast.error("Đã có lỗi xảy ra")
      state.postLoginLoading = false
    },

    [fetchLogin.fulfilled.toString()]: (state, { payload }) => {
      switch (payload.status) {
        case HTTP_OK: {
          const {
            data: { profile, token },
          } = payload

          state.loggedIn = true
          state.profile = profile
          localStorage.setItem(TOKEN, token)
          toast.success("✨")
          break
        }
        case HTTP_UNAUTHORIZED: {
          toast.error("Phiên đăng nhập không hợp lệ")
          break
        }
        default:
          break
      }
    },
    [fetchLogin.rejected.toString()]: (state, { payload }) => {
      toast.error("Đã có lỗi xảy ra")
    },
  },
})

export const userSelector = (state: RootState) => state.user
export const { setLogout } = userSlice.actions
export default userSlice.reducer
