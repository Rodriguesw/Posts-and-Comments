import styles from './Header.module.css'

import Ignitelogo from '../public/Ignitelogo.svg'



export function Header() {
    return (
        <header className={styles.header}>
            <img src={Ignitelogo} alt="Logo do Ignite"/>
        </header>
    );
}