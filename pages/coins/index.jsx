import Axios from "axios";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const CoinList = ({ coinData }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>COINS PAGE</title>
            </Head>

            {coinData.coins.map((coin) => {
                return (
                    <div>
                        <h1>{coin.name}</h1>
                        <img src={coin.icon} />
                        <p> {coin.price}</p>
                    </div>
                );
            })
            }
        </div>
    )
};

export const getStaticProps = async () => {

    const data = await Axios.get(
        "https://api.coinstats.app/public/v1/coins?skip=0"
    );

    return {
        props: {
            coinData: data.data
        },
        revalidate: 10,
    };
};

export default CoinList;