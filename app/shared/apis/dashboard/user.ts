import { USER_STATUS } from "../../../types/user";

// In shared/apis/identity/user.ts or in a relevant types folder
export interface User {
    id: string;
    fullName: string;
    email: string;
    avatarImageId?: string;
    status: number; // You may use a more specific type if status is an enum
    updatedAt: string; // or Date, depending on your backend's response
  }

  export interface ListUsersRequestFieldFilter {
    search?: string; // Search term for the user’s name or email
    status?: USER_STATUS; // String status filter for users
  }
  