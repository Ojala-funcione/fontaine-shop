/* eslint-disable no-unused-vars */
export interface IUser {
  uid: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  address: string | null;
  city: string | null;
  country: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  state: string | null;
  zip: string | null;
}
export interface AllUsersResponse {
  users: IUser[];
  total: number;
}
export interface UsersApi {
  getAllUsers(userType?: string): Promise<AllUsersResponse>;
  getOneUserById(userId: string): Promise<IUser>;
  editUser(userId: string): Promise<IUser>;
}
