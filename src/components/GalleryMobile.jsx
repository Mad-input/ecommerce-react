import { useState } from 'react'
import {bigImages} from '../const/const'

export default function GalleryMobile() {
  const [position,setPosition] = useState(1)

  const scrollTo = (type) => {
    const items = document.querySelectorAll('.section__gallery_mobile .image')
    const gallery = document.querySelector('.section__gallery_mobile .gallery')
    if (type === 'next'){
      position === 3 
      ? setPosition(0)
      : setPosition(position + 1)
    }
    gallery.scrollTop = Array.from(items)[position].offsetTop
  }
  
  const next = ()=> {
    scrollTo('next')
  }
  return (
    <section className='section__gallery_mobile'>
        <div className="gallery">
            <div className="image"><img src={bigImages[0]} alt="0" /></div>
            <div className="image"><img src={bigImages[1]} alt="1" /></div>
            <div className="image"><img src={bigImages[2]} alt="2" /></div>
            <div className="image"><img src={bigImages[3]} alt="3" /></div>
        </div>
        <button onClick={next} className="btn"><img src="/images/icon-next.svg" alt="next" /></button>
    </section>
  )
}
