import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

//Para avatar foro aleatória no avatar https://source.unsplash.com/random, https://github.com/Rodriguesw.png

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://github.com/Rodriguesw.png"/>
                
                <strong>Matheus Henrique</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}