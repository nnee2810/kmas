import { ElementType } from "react"

export interface AppRoute {
  name?: string
  path: string
  exact: boolean
  component: ElementType
  requireAuth: boolean
}
