import CartIcon from './icons/CartIcon'
import Card from './Card.jsx'

// eslint-disable-next-line react/prop-types
export default function Shop({showCard,count,price,setCount,setShowCard}) {
  const handleClick = () => document.querySelector('.menu__cartShop').classList.toggle('active')


  return (
    <section className='section__cartShop' onClick={handleClick}>
      <CartIcon></CartIcon>
      <div className="menu__cartShop">
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
