import Image from "next/image";
import styles from "./home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>

      <Link href="/about">About</Link>

    </main>
  );
}
