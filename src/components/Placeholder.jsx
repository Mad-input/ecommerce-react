import { useState } from "react"

export default function Placeholder() {
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
  return (
    <section className='placeholder__gallery'>
        <div className="close">
          <button className="btn-close"><img src="/images/icon-close.svg" alt="icon-close" /></button>
        </div>
            <div className="gallery__p">
              <div className="big__images">
                <img src="/images/image-product-1.jpg" alt="1" />
                <img src="/images/image-product-2.jpg" alt="2" />
                <img src="/images/image-product-3.jpg" alt="3" />
                <img src="/images/image-product-4.jpg" alt="4" />
              </div>
                <button onClick={back} className="btn__back btn"><img src="/images/icon-previous.svg" alt="btn-back" /></button>
                <button onClick={next} className="btn__next btn"><img src="/images/icon-next.svg" alt="btn-next" /></button>
              <div className="previews">
                <img src="/images/image-product-1-thumbnail.jpg" alt="1" />
                <img src="/images/image-product-2-thumbnail.jpg" alt="2" />
                <img src="/images/image-product-3-thumbnail.jpg" alt="3" />
                <img src="/images/image-product-4-thumbnail.jpg" alt="4" />
              </div>
            </div>
    </section>
  )
}
