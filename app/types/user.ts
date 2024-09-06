// types/user.ts
export type User = {
    id: string;
    name: string;
    email: string;
    status: USER_STATUS;
    createdAt: string;
    updatedAt: string;
  };
  
  export enum USER_STATUS {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
  }
  
  export type ListUsersRequestFieldFilter = {
    page?: number;
    limit?: number;
    search?: string;
    status?: USER_STATUS;
  };
  