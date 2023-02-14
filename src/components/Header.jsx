import styles from './Header.module.css'

import Ignitelogo from '../assets/ignitelogo.svg'



export function Header() {
    return (
        <header className={styles.header}>
            <img src={Ignitelogo} alt="Logo do Ignite"/>
        </header>
    );
}