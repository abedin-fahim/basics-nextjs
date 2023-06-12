import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from './index.module.css';

const inter = Inter({ subsets: ['latin'] });

const AboutPage = () => {
  return (
    <div className={`${inter.className} ${styles.main}`}>
      <Link href='/'>Homepage</Link>
      <h1>AboutPage</h1>
    </div>
  );
};

export default AboutPage;
