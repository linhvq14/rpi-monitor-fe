// services/userService.ts
import axios from 'axios';
import { ListUsersRequestFieldFilter, User } from '../types/user';

export const fetchListUsers = async (
    filters: ListUsersRequestFieldFilter
  ): Promise<{ users: User[]; total: number }> => {
    const response = await axios.get('http://127.0.0.1:5000/api/users', {
      params: {
        page: filters.page || 1,
        limit: filters.limit || 10,
        search: filters.search || '',
        status: filters.status || '',
      },
    });
  
    const { data } = response;
  
    return {
      users: data.users,
      total: data.total,
    };
  };
