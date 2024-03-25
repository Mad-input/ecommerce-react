import { useEffect, useState } from 'react'
import Shop from './Shop.jsx'
import NavigationMobile from './NavbarMobile.jsx'
// eslint-disable-next-line react/prop-types
export default function Header({showCard,setShowCard,count,price,setCount}) {
    const [showNavbar,setShowNavbar] = useState(false)
    const [isMobile,setIsMobile] = useState(false)
    useEffect(()=>{
        const handleResize = ()=> {
            setIsMobile(window.innerWidth < 860)
        }
        handleResize()
        window.addEventListener('resize',handleResize)

        return ()=> {
            window.removeEventListener('resize',handleResize)
        }
    },[isMobile])

    const handleClick = () => {
        setShowNavbar(!showNavbar)
    }
    return (
    <header>
        
        {
            isMobile 
            ? 
            <>  
                <div className="util">
                    <button onClick={handleClick} className="open__nav__mobile"><img src="/images/icon-menu.svg" alt="icon-menu" /></button>
                    <div className="logo"><img src="/images/logo.svg" alt="logo" /></div>
                </div>
                <NavigationMobile showNavbar={showNavbar} setShowNavbar={setShowNavbar}></NavigationMobile>
                {
                    showNavbar ? <div className="mask"></div> : ''
                }
            </>
            : <>
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
            </>
            
        }
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
