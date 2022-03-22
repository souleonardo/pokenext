import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function about() {
  return (
    <div className={styles.container}>  
      <h1>About page</h1>
      <Link href={'./'}>Voltar</Link>
    </div>  
  )
}