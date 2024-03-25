import CartIcon from './icons/CartIcon'
import Card from './Card.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export default function Shop({showCard,count,price,setCount,setShowCard}) {
  const [showMenu, setShowMenu] = useState(false)
  const handleClick = () => setShowMenu(!showMenu)

  useEffect(()=>{
    if (+localStorage.getItem('count') > 0) setShowCard(true)
  },[setShowCard])

  return (
    <section className='section__cartShop' onClick={handleClick}>
      <CartIcon></CartIcon>
      <div className={`menu__cartShop ${showMenu ? 'active': ''}`}>
          <div className="head__cartShop">
              <h2>Cart</h2>
          </div>
          <div className="body__cartShop">
            {showCard ? <Card count={count} price={price} setCount={setCount} setShowCard={setShowCard}></Card> : <p>Your cart is empty</p>}
          </div>
      </div>
      <b className={showCard ? 'circle__notification': 'circle__notification none'}>{count}</b>
    </section>
  )
}
