import Link from 'next/link'
import styles from "./about.module.css";
import NavBar from "../components/NavBar/NavBar";

export default function Dashboard() {
    return(
        <>
        <h1 className={styles.dash}>Hello, Dashboard Page!</h1>
        <NavBar />
        <Link href="/">Home</Link>
        </>
    );
  }