import {useState, useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Store} from '../../store/index'
import {useHistory} from 'react-router-dom'


const ProductDetail = ({item}) => {

    const [data, setData] = useContext(Store)

    const handleClickAdd = (e) => {
        // console.log(e)
        
        setData({
            ...data,
            cantidad: data.cantidad + qty,
            items: [...data.items, {item: item, cantidad:qty}],
            precioTotal: data.precioTotal + (item.precio * qty)
        })
        alert(`Producto agregado al carrito ${qty}`)
        console.log(data)
        // history.pushState('/cart')
    }

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

    // const add = () => {
    //     alert(`Agregaste ${qty} a tu carrito de compras`)
    // }

    return (
        <article>
            <h1>{item.titulo}</h1>
            <img src={item.img} alt="Imagen Descriptiva"/>
            <p>{item.descripcion}</p>
            <p>$ {item.precio}</p>
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
            {/* <button className='btnChartSummit'
                onClick={add}
            >AGREGAR</button> */}
            <button onClick={handleClickAdd}>Agregar al carrito</button>
        </article>
    )
}

export default ProductDetail