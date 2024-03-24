// eslint-disable-next-line react/prop-types
export default function ManageCount({count,countMinus,countPlus,setShowCard}) {
  const handleClick = ()=> {
    if (count < 1) setShowCard(false)
    else countMinus()
  }
    
  return (
    <div className="count">
        <button className="btn_min btn" onClick={handleClick}><img src="/images/icon-minus.svg" alt="minus" /></button>
        <strong>{count}</strong>
        <button className="btn_plus btn" onClick={countPlus}><img src="/images/icon-plus.svg" alt="plus" /></button>
    </div>
  )
}
