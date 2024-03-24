// eslint-disable-next-line react/prop-types
export default function Card({count,price,setCount,setShowCard}) {

  const handleClick = ()=> {
    setCount(0)
    setShowCard(false)
  }

    return ( 
      <div className="card__cartShop">
        <div className="info__card">
          <div className="image__card">
            <img src="/images/image-product-1-thumbnail.jpg" alt="product 1 card" />
          </div>
          <div className="details">
            <h6 className="card__title">Fall Limited Edition Sneakers</h6>
            <p className="price__card">${price}.00 x {count} <strong>${price * count}</strong></p>
          </div>
            <button className="btnDelete" onClick={handleClick}><img src="/images/icon-delete.svg" alt="delete" /></button>
        </div>
        <button className="btn-checkout">Checkout</button>
      </div>
    )
  }