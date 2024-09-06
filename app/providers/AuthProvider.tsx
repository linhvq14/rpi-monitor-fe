'use client';

import { createContext, useState } from 'react';
import { fetchMe } from '../shared/apis/auth/authentication';

type AuthUser = {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  avatarImageId: string;
  status: number;
  usingSystemRole: boolean;
};

interface AuthContext {
  authUser: AuthUser | null;
  isLoading: boolean;
  setAuthLoading: (state: boolean) => void;
  fetchAuthUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);

  const setAuthLoading = (state: boolean) => {
    setIsLoading(state);
  };

  const fetchAuthUser = async () => {
    try {
      setAuthLoading(true);
      const response = await fetchMe();

      if (response.data?.id) {
        setAuthUser(response.data);
      }
    } catch {
      setAuthLoading(false);
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ authUser, isLoading, setAuthLoading, fetchAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
