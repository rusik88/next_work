import {ParamsClient} from "./interfaces";
import styles from "./styles.module.css";
import Link from "next/link";

export default async function ClientID({params}: ParamsClient) {
    const {clientID} = params;
    return (
        <div>
            <h1 className={styles.head}>Client Page ClientID {clientID}</h1>
            <p>This just text</p>
            <Link href="/">Home</Link>
        </div>
    );
}
