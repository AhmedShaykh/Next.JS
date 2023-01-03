import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

const Profile = () => {

    const router = useRouter();

    const { username } = router.query;

    let myUsername;

    if (username) {
        myUsername = username.toUpperCase();
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{myUsername} PAGE</title>
            </Head>

            <h1>HELLO {myUsername}!</h1>
        </div>
    )
};

export default Profile;