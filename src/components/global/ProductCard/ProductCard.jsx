import './ProductCard.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const ProductCard = ({titulo, precio, id}) => {
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
        <article>
            <img src='https://placehold.it/150x250' alt="Imagen descriptiva del producto"/>
            <h3>{titulo}</h3>
            <p>$ {precio}</p>
            {/* <div className="qty">
                <button
                    disabled={qty === 1 ? 'disable' : null}
                    onClick={clickResta}
                >-</button>
                <input type="number" value={qty} readOnly/>
                <button
                    onClick={clickSuma}
                > +</button>
            </div>
            <button className='btnChartSummit'
                onClick={add}
            >AGREGAR</button> */}
            <Link className='detail' to={`/detail/${id}`}>Ver mas</Link>
        </article>
    )
}

export default ProductCard