import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Initial Page</title>
    </Head>

    <div className={styles.container}>
      <h1>Hello World Pokenext</h1>
    </div>
    </>

  )
}
