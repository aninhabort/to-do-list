import Body from "./components/Body"
import Header from "./components/Header"

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles['main-page']}>
      <div className={styles['header-background']}></div>
      <Header />
      <Body />
    </div>
  )
}

export default App
