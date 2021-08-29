export type SetState<T> = (value: ((prevState: T) => T) | T) => void
