
import PropTypes from "prop-types"
import defaultImage from "./images/book-default.jpg"

const Book = ({id, image, title, price}) => {
  return <div>
    <h6>{id}. pořadí</h6>
    <h2>{title || "Defaultní název"}</h2>
    <img src={image || defaultImage} alt="" />
    <p>{price || 1000} Kč</p>
  </div>
  
}
// popis vypisovaných položek
Book.propTypes = {
    id:PropTypes.number.isRequired,
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}

// náhradní zápis pokud nějaká položka chybí
// Book.defaultProps = { 
//     image:defaultImage,
//     title:"Defaultní název",
//     price:1000,

// }

export default Book