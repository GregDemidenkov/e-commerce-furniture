import { User } from "./types";

export const userSerializer = (data: any): User => {
  return {
    id: data.id,
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    birthday: data.birthday,
    gender: data.gender,
    role: data.role
  } as User;
}