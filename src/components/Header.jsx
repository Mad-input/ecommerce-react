import Shop from './Shop.jsx'
// eslint-disable-next-line react/prop-types
export default function Header({showCard,setShowCard,count,price,setCount}) {
  return (
    <header>
        
        <nav className="navigation">
            <div className="logo">sneakers</div>
            <ul className="list__nav">
                <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">Collections</a></li>
                <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">Men</a></li>
                <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">Women</a></li>
                <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">About</a></li>
                <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
        </nav>
        <div className="options">
            <Shop showCard={showCard} count={count} price={price} setCount={setCount} setShowCard={setShowCard}></Shop>
            <div className="user">
                <div className="user__image" aria-label='button'>
                    <img src="/images/image-avatar.png" alt="person" />
                </div>
            </div>
        </div>
    </header>
  )
}
