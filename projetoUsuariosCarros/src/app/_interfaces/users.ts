import { Car } from "./car";

export interface Users {
  idUsers: number,
  firstName: string,
  lastName: string,
  email: string,
  birthday: string,
  login: string,
  password: string,
  phone: string,
  role: string,
  cars: [Car]
}
