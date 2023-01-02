import Head from 'next/head';
import styles from '../styles/Home.module.css';

const about = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ABOUT PAGE</title>
            </Head>

            <h1>THIS IS ABOUT PAGE</h1>
        </div>
    )
};

export default about;