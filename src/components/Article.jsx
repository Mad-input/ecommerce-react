
import Gallery from './Gallery.jsx'
import ManageCount from './ManageCount.jsx'
import CartIcon from './icons/CartIcon.jsx'
import GalleryMobile from './GalleryMobile.jsx'
import { useEffect, useState } from 'react'
// eslint-disable-next-line react/prop-types
export default function Article({setShowCard,count,countMinus,countPlus,price,setShowPlace}) {
    const [isMobile,setIsMobile] = useState(false)

    useEffect(()=>{
        const handleResize = ()=> {
            setIsMobile(window.innerWidth < 735)
        }
        handleResize()
        window.addEventListener('resize',handleResize)

        return ()=> {
            window.removeEventListener('resize',handleResize)
        }
    } ,[isMobile])

    const handleClick = ()=> {
        if (count > 0) setShowCard(true)
        else setShowCard(false)
    }
  return (
    <article>
        {isMobile ? <GalleryMobile></GalleryMobile> : <Gallery setShowPlace={setShowPlace}></Gallery>}
        <section className='section__details'>
            <h2 className='sub'>Sneaker Company</h2>
            <h1 className='title__article'>Fall Limited Edition Sneakers</h1>
            <p className="description__article">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="pricing"> 
                <strong className="price">
                    ${price}.00
                    <div className="tag">50%</div>
                </strong> 
                <div className="past__price">$250.00</div>
            </div>

            <div className="add-to-cart">
                <ManageCount count={count} countMinus={countMinus} countPlus={countPlus} setShowCard={setShowCard}></ManageCount>
                <button onClick={handleClick} className="btn__add-to-card"><CartIcon></CartIcon>Add to cart</button>
            </div>
        </section>
    </article>
  )
}
