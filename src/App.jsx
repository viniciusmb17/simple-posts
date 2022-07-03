import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo sapiente nobis excepturi minus quis eaque. Cupiditate quasi, libero velit commodi illo dolorem delectus non magni incidunt ea quaerat laboriosam."
          />
          <Post
            author="Gabriel"
            content="Quasi, libero velit commodi illo dolorem delectus non magni incidunt ea quaerat laboriosam."
          />
        </main>
      </div>
    </div>
  )
}
