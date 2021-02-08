import './ProductCard.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({titulo, precio, id, img}) => {
    const[qty, setearQty] = useState(1);

    const clickResta = () => {
        if(qty > 1) {
            setearQty(qty - 1)
        }
    }

    const clickSuma = () => {
        if(qty) {
            setearQty(qty + 1)
        }
    }

    const add = () => {
        alert(`Agregaste ${qty} a tu carrito de compras`)
    }

    return (
        <article className="ProductCart">
            <img src={`/img/${img}`} alt="Imagen descriptiva del producto"/>
            <h3>{titulo}</h3>
            <p>$ {precio}</p>

            <Link className='detail' to={`/detail/${id}`}>Ver mas</Link>
        </article>
    )
}

export default ProductCard