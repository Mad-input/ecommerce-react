import Header from './Header.jsx'
import Placeholder from './Placeholder.jsx'


// eslint-disable-next-line react/prop-types
export default function Layout({children, showCard,count,price,setCount,setShowCard}) {
    
  return (
    <div className='layout'>
        <Header showCard={showCard} setShowCard={setShowCard} count={count} price={price} setCount={setCount}></Header>
        <main>
            {children}
        </main>
        <Placeholder></Placeholder>
    </div>
  )
}
