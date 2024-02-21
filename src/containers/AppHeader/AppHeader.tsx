import Link from 'next/link';

import styles from './styles.module.scss';
const AppHeader = () => {
  return (
    <header className={styles.appHeader}>
      <div className={styles.appHeader__container}>
        <Link href="/" className={styles.appHeader__branding}>
          App title
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
