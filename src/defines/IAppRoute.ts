import { ComponentType } from "react"

export default interface AppRoute {
  name?: string
  path: string
  exact: boolean
  component: ComponentType
  requireAuth: boolean
}
