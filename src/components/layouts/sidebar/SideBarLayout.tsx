import Link from 'next/link';
import styles from './SideBarLayout.module.css';

export interface SideBarLayoutProps {}

const SideBarLayout: React.FC<SideBarLayoutProps> = () => {
  return (
    <div className={styles.navigate}>
      <input type="text" className={styles.input} placeholder="search..." />
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/contact">
        Contact
      </Link>
    </div>
  );
}

export default SideBarLayout;