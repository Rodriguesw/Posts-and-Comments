import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function  handleLikeComment () {
        setLikeCount(likeCount + 1);
    }
    
    return (
        <div className={styles.comment}>
            <Avatar  hasBorder={false} src="https://github.com/Rodriguesw.png"/>

            <div className={styles.commentbox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Henrique</strong>
                            <time title="24 de janeiro às 14:40h" datatime="2023-01-24 14:40:19">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button  onClick={handleLikeComment}>
                        <ThumbsUp />
                            Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}















