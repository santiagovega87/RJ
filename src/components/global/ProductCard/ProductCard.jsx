import './ProductCard.css'

const ProductCard = ({titulo, precio}) => {
    return (
        <article>
            <img src="https://placehold.it/150x250" alt=""/>
            <h3>{titulo}</h3>
            <p>{precio}</p>
        </article>
    )
}

export default ProductCard