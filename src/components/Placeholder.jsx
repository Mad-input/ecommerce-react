import { useState } from "react"
import {bigImages,SmallImages} from '../const/const'
import IconClose from "./icons/IconClose"

// eslint-disable-next-line react/prop-types
export default function Placeholder({setShowPlace}) {
  const [position,setPosition] = useState(1)

  const scrollTo = (type) => {
    const items = document.querySelectorAll('.big__images img')
    const gallery = document.querySelector('.big__images')
    if (type === 'next'){
      position === 3 
      ? setPosition(0)
      : setPosition(position + 1)
    }
    else if (type === 'back') {
      position === 0 
      ? setPosition(3)
      : setPosition(position - 1)
    }
    gallery.scrollLeft = Array.from(items)[position].offsetLeft
  }
  
  const next = ()=> {
    scrollTo('next')
  }
  const back = ()=> {
    scrollTo('back')
  }

  const handleClick = () => {
    setShowPlace(false)
  }
  return (
    <section className='placeholder__gallery'>
        <div className="close">
          <button onClick={handleClick} className="btn-close"><IconClose></IconClose></button>
        </div>
            <div className="gallery__p">
              <div className="big__images">
                <img src={bigImages[0]} alt="1" />
                <img src={bigImages[1]} alt="2" />
                <img src={bigImages[2]} alt="3" />
                <img src={bigImages[3]} alt="4" />
              </div>
                <button onClick={back} className="btn__back btn"><img src="/images/icon-previous.svg" alt="btn-back" /></button>
                <button onClick={next} className="btn__next btn"><img src="/images/icon-next.svg" alt="btn-next" /></button>
              <div className="previews">
                <div className={`image`}>
                  <img src={SmallImages[0]} alt="0" />
                </div>
                <div className={`image`}>
                  <img src={SmallImages[1]} alt="1" />
                  </div>
                <div className={`image`}>
                  <img src={SmallImages[2]} alt="2" />
                  </div>
                <div className={`image`}>
                  <img src={SmallImages[3]} alt="3" />
                  </div>
              </div>
            </div>
    </section>
  )
}
