import Link from "next/link"
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function about() {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
    
    <div className={styles.container}>  
      <h1>About page</h1>
      <Link href={'./'}>Voltar</Link>
    </div> 
    </> 
  )
}