// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
    <h1 className= "card-title">{title}</h1>
    <p className ="crd-description">{description}</p>
    <div className="img-continer">
    <img className="card-img" src={imgUrl} alt={title}/>
    </div>
    </li>
  )
}
export default CardItem