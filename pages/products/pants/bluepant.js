import Link from "next/link"
import Head from "next/head"

export default function Bluepant() {
  return (
    <>
      <Head>
        <title>Blue Pants page</title>
      </Head>
      <div>  
        <h1>Blue Pant Page</h1>
        <Link href={'../../../'}>Voltar</Link>
    </div>  

    </>

  )
}