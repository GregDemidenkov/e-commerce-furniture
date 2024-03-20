export type FormState = {
  firstName: string,
  lastName: string,
  birthday: string,
  email: string,
  password: string
}

export type FormStateErrors = {
  firstName: string | null,
  lastName: string | null,
  birthday: string | null,
  email: string | null,
  password: string | null
}