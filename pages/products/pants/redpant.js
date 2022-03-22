import Link from "next/link"
import Head from "next/head"


export default function Bluepant() {
  return (
    <>
    <Head>
      <title>Red Pants page</title>
    </Head>
    
    <div>  
        <h1>Red Pant Page</h1>
        <Link href={'./'}>Voltar</Link>
    </div> 
    
    
    
    </>
 
  )
}