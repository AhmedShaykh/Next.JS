import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LEARNING NEXT.JS 12!</title>
      </Head>

      <h1 style={{ margin: "80px 0" }}>I'M AHMED SALEEM SHAIKH</h1>

      <h2 style={{ margin: "80px 0" }}>FULL STACK DEVELOPER</h2>
    </div>
  )
};