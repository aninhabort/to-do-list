import Body from "./components/Body"
import Header from "./components/Header"

import './global.css'
import style from './App.module.css'

function App() {
  return (
    <div className={style['main-page']}>
      <div className={style['header-background']}></div>
      <Header />
      <Body />
    </div>
  )
}

export default App
