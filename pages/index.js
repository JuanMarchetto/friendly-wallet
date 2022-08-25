import Head from 'next/head'
import axios from "axios"

export default function Home() {

  async function getName(){
    const response = await axios.get('api/hello');
    console.log(response);
  }

  return (
    <div>
      <Head>
        <title>Friendly Wallet</title>
        <meta name="description" content="Friendly Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={getName}>Get</button>
    </div>
  )
}
