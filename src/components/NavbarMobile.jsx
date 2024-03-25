import IconClose from "./icons/IconClose";

// eslint-disable-next-line react/prop-types
export default function NavbarMobile({showNavbar,setShowNavbar}) {
    const handleClick = ()=> {
        setShowNavbar(false)
    }
  return (
    <nav className={`navigation__mobile ${showNavbar ? 'active' : ''}`}>
        <div className="close__nav">
            <button onClick={handleClick} className="close"><IconClose></IconClose></button>
        </div>
        <ul className="list__nav">
            <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">Collections</a></li>
            <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">Men</a></li>
            <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">Women</a></li>
            <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">About</a></li>
            <li className="item__list"><a href="#" target="_blank" rel="noopener noreferrer">Contact</a></li>
        </ul>
    </nav>
  )
}
