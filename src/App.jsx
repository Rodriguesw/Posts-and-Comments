import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './app.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Rodriguesw.png",
      name: 'Matheus Henrique',
      role: "Estagiário"
    },
    content: [
     { type: 'paragraph', content: "Fala galeraa 👋" },
     { type: 'paragraph', content: "Acabei de subir mais um projeto. É um projeto bem legal para colocar no portfólio 🚀🚀" },
    ],
    publishedAt: new Date('2023-01-20 16:17:15'),
  },
  {
    id: 2,
      author: {
      avatarUrl: "https://source.unsplash.com/random",
        name: 'Thiago Cruz',
          role: "Desenvolvedor Pleno "
    },
    content: [
      { type: 'paragraph', content: "Fala Dev!" },
      { type: 'paragraph', content: "Sempre que você atualizar a página, a minha foto de perfil irá mudar." },
      { type: 'link', content: "webpersonal/PremiumStudio" },
    ],
    publishedAt: new Date('2023-01-25 16:24:38'),
    }
]


export function App(props) {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map (post => {
            return  (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


