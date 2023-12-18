import AuthButton from '../../../components/buttons/auth/AuthButton';
import Link from 'next/link';
import styles from './Header.module.css';

export interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
}

const Header: React.FC<HeaderProps> = (props) => {
  const { className, ...headerProps } = props;
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/" className="hover:underline">About</Link>
        <Link href="/" className="hover:underline">Store</Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/" className="hover:underline hidden sm:inline">Email</Link>
        <Link href="/" className="hover:underline hidden sm:inline">Images</Link>
        <AuthButton />
      </div>
    </header>
  );
}

export default Header;