export type User = {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  birthday: string,
  gender: 'male' | 'female' | null,
  role: 'client' | 'admin'
}

export interface Message {
  type: 'success' | 'error' | null,
  text: string
}

export interface LoginDto {
  email: string,
  password: string
}

export type RegistrationDto = {
  firstName: string,
  lastName: string,
  birthday: string,
  email: string,
  password: string
}

export interface LoginData extends LoginDto {};

export interface RegistrationData {
  first_name: string,
  last_name: string,
  birthday: string,
  email: string,
  password: string
}

export type LoginResponse = {
  accessToken: string,
  refreshToken: string,
  user: User
}

export type AuthResponse = {
  accessToken: string,
  user: User
}