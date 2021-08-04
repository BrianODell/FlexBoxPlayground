import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FlexBox Playground</title>
        <meta name="description" content="Play and Learn FlexBox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to FlexBox Playground
        </h1>

        <div className={styles.flexcontainer}>
          <div className={styles.flexitem}></div>
          <div className={styles.flexitem}></div>
          <div className={styles.flexitem}></div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
