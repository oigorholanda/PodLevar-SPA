import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

import Header from './components/Header'

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      
    </main>
  )
}
