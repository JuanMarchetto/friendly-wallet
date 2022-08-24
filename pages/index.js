import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Friendly Wallet</title>
        <meta name="description" content="Friendly Walletp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-blue-700">
          Friendly Wallet
        </h1>
        <Link href={"/signin"}>
          <button>SignIn</button>
        </Link>
      </main>
    </div>
  );
}
