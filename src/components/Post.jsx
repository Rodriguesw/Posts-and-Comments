import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

    const [commenst, setComments] = useState([
        "Post muito bacana!"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateformatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreatNewComment() {
        event.preventDefault()

        setComments([...commenst, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');//Depois do user tentar fazer um post vazio e realizar um npost com comentário, a ação será realizada normalmente
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
       const commentWithouDeletedOne = commenst.filter(comment =>{
        return comment != commentToDelete
        })
        setComments(commentWithouDeletedOne);
    }

    function handleNewCommentInvalid () {
        event.target.setCustomValidity('Esse campo é obrigatório!');//Vai impedir de publicar um post vazio
    }

    const isNewCommentEmpty = newCommentText == 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateformatted} datatime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreatNewComment} className={styles.commentForm}>
                <strong>Deixa seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {commenst.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>
        </article>
    )
}  