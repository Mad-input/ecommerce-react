export default function Gallery() {
    const SmallImages = ['/images/image-product-1-thumbnail.jpg','/images/image-product-2-thumbnail.jpg','/images/image-product-3-thumbnail.jpg',"/images/image-product-4-thumbnail.jpg"]
    const bigImages = [ '/images/image-product-1.jpg','/images/image-product-2.jpg','/images/image-product-3.jpg','/images/image-product-4.jpg' ]
    const changeImage = ({target})=> {
        const place = document.querySelector('.section__gallery .placeHolder')
        const bigImage = document.querySelector('.section__gallery .big-image img')
        const {offsetLeft,clientHeight,clientWidth} = target
        bigImage.setAttribute('src',bigImages[target.id]) 
        place.style = `
            left: ${offsetLeft}px;
            width: ${clientWidth}px;
            height: ${clientHeight}px;
        `
    }

  return (
    <section className="section__gallery">
        <div className="big-image">
            <img src="/images/image-product-1.jpg" alt="image-product-Sneakers" id="bigImage"/>
        </div>
        <div className="small-images">
            <img onMouseEnter={changeImage} id="0"src={SmallImages[0]} alt="product-1"/>
            <img onMouseEnter={changeImage} id="1"src={SmallImages[1]} alt="product-2"/>
            <img onMouseEnter={changeImage} id="2"src={SmallImages[2]} alt="product-3"/>
            <img onMouseEnter={changeImage} id="3"src={SmallImages[3]} alt="product-4"/>
            <div className="placeHolder"></div>
        </div>
    </section>
  )
}
