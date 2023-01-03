import styles from '../styles/Home.module.css';
import Link from 'next/link';

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <h1>
                404 | Page Not Found
            </h1>

            <Link href="/">
                Click Here To Go Home Page
            </Link>
        </div>
    )
}

export default PageNotFound;