import { ILesson, IProfile } from "interfaces"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  profile: IProfile | null
  lessons: ILesson[]
}

interface UserState extends User {
  setUser(user: Partial<User>): void
  clearUser(): void
}

export const useUser = create<UserState>()(
  persist(
    (set) => ({
      profile: null,
      lessons: [],
      setUser: (user) =>
        set({
          ...user,
        }),
      clearUser: () =>
        set({
          profile: null,
          lessons: [],
        }),
    }),
    {
      name: "user",
    },
  ),
)
