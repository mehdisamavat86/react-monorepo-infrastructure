import { useContext } from 'react';
import { AuthContext } from '../context';

export const useAuthLogout = () => {
  const { logOut } = useContext(AuthContext);

  return logOut;
};
