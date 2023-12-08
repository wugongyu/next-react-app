import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface PrimaryLayoutProps {
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({children}) => {
  return (
    <>
      <Head>
        <title>primary layout</title>
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
}

export default PrimaryLayout;