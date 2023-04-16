import Head from "next/head";
import styles from "@/styles/Home.module.css";
import List from "./components/List";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className="container">
        <h2>Restaurant</h2>
        <Link href="/createR">
          <button className={styles.btn}>
            <div className={styles.flex}>
              <span className="material-symbols-outlined">add</span>
              {/* <p className="ml-2"></p> */}
            </div>
          </button>
        </Link>
      </div>
      <div className="container">
        <List />
      </div>
    </>
  );
}
