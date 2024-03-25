import Layout from './components/Layout'
import './assets/css/App.css'
import Article from './components/Article.jsx'
import {useState} from 'react'



function App() {
    const getStorage = parseInt(localStorage.getItem('count'))
    const [showCardApp, setShowCard] = useState(false)
    const [count , setCount] = useState( getStorage || 0)
    const [showPlace, setShowPlace] = useState(false)

    let price = 125

    const saveInStorage = () => localStorage.setItem('count',count)
    saveInStorage()

    const countMinus = ()=> {
        if (count < 1) return
        saveInStorage()
        setCount(count - 1) 
    }
    const countPlus = ()=>{
      saveInStorage()
      setCount(count + 1)
    }  

  return (
    <>
      <Layout showCard={showCardApp} price={price} count={count} setCount={setCount} setShowCard={setShowCard} showPlace={showPlace} setShowPlace={setShowPlace}>
        <Article 
        setShowCard={setShowCard} 
        count={count} 
        countMinus={countMinus} 
        countPlus={countPlus} 
        price={price} 
        setShowPlace={setShowPlace}
        showPlace={showPlace}
        >
        </Article>
      </Layout>
    </>
      
  )
}

export default App
