import Axios from "axios";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export const getServerSideProps = async () => {

    const data = await Axios.get(
        "https://api.github.com/users/AhmedShaykh/repos"
    );

    return {
        props: {
            repoData: data.data,
        },
    };
};

const Repos = ({ repoData }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>REPOS PAGE</title>
            </Head>

            <h1>MY REPOS</h1>

            {repoData.map((repo) => {
                return (
                    <div style={{ margin: "50px 0", cursor: "pointer" }}>
                        <h2 className={styles.box}>{repo.name}</h2>
                    </div>
                );
            })}
        </div >
    )
};

export default Repos;