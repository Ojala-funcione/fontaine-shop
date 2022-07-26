/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
import axios from 'axios';
import { userCustomerData, usersData, userSuperAdminData } from './data';
import { UsersApi, AllUsersResponse, IUser } from './usersInterfaces';

const useAPIUsers = (): UsersApi => {
  const getAllUsers = async (userType?: string): Promise<AllUsersResponse> => {
    console.log(userType);
    // try {
    //   const response = await axios.get('https://url_base.com/algo');
    //   return response as unknown as AllUsersResponse;
    // } catch (error) {
    //   throw error;
    // }
    return { users: usersData, total: usersData.length };
  };
  const getOneUserById = async (userId: string): Promise<IUser> => {
    console.log(userId);
    // try {
    //   const response = await axios.get('https://url_base.com/algo');
    //   return response as unknown as IUser;
    // } catch (error) {
    //   throw error;
    // }
    return userSuperAdminData;
  };
  const editUser = async (userId: string): Promise<IUser> => {
    console.log(userId);
    // try {
    //   const response = await axios.post('https://url_base.com/algo', {
    //     qsy: 'algo'
    //   });
    //   return response as unknown as IUser;
    // } catch (error) {
    //   throw error;
    // }
    return userCustomerData;
  };

  return {
    getAllUsers,
    getOneUserById,
    editUser
  };
};
export default useAPIUsers;
