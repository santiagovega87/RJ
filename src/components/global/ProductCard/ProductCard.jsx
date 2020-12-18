import './ProductCard.css'
import {useState} from 'react'

const ProductCard = ({titulo, precio}) => {
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
            <img src="https://placehold.it/150x250" alt=""/>
            <h3>{titulo}</h3>
            <p>{precio}</p>
            <div className="qty">
                <button
                    disabled={qty == 1 ? 'disable' : null}
                    onClick={clickResta}
                >-</button>
                <input type="number" value={qty} readOnly/>
                <button
                    onClick={clickSuma}
                > +</button>
            </div>
            <button className='btnChartSummit'
                onClick={add}
            >AGREGAR</button>
        </article>
    )
}

export default ProductCard