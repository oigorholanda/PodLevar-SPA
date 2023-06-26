import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

import Header from './components/Header'

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />

      <div className={styles.container}>
    <p>Não to usando, pode levar...</p>
    <br />
    <p>Cadastre suas doações para ajudar quem precisa. </p>
      </div>

      
    </main>
  )
}
