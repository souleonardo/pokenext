import Head from "next/head"
import Link from "next/link"
import styles from '../../styles/Home.module.css'

export default function product() {
  return (

    <>
      <Head>
        <title>Products page</title>
      </Head>

      <div className={styles.container}>  
          <h1>Products page</h1>
          <Link href={'./'}>Voltar</Link>
      </div> 

    </>
 
  )
}