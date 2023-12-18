'use client'
import AuthContext from '../../../state/auth/AuthContext';
import { useContext } from 'react';
import styles from './AuthButton.module.css';

export interface AuthButtonProps extends React.ComponentPropsWithoutRef<'button'> {
}

const AuthButton: React.FC<AuthButtonProps> = ({className, ...buttonProps}) => {
  const { authenticated, login, logout } = useContext(AuthContext);
  return (
    <button 
      {...buttonProps}
      onClick={authenticated ? logout : login}
      className={`${styles.container} ${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`}
    >
      {authenticated ? 'Sign out' : 'Sign in'}
    </button>
  );
}

export default AuthButton;