import {useContext} from 'react'
import { Link } from 'react-router-dom'
import products from '../../Productos'
import {Store} from '../../store/index'
import './cart.css'


const Cart = () => {

    const [data, setData] = useContext(Store)

    console.log(data)

    const handleClickClear = () => {
        setData({
            cantidad: 0,
            items: [],
            precioTotal: 0,
        })
    }

    return (
        <div className="cart">
            <h1>ESTAS DENTRO DEL CARRITO</h1>
            <ul>
                {
                    data.items.map(item => 
                        <li>
                            <h3>Articulo: {item.item.data.titulo}</h3>
                            <p>Cant: {item.cantidad}</p>
                            <p>Precio: $ {item.item.data.pricio}</p>
                            <p>Sub Total: $ {item.cantidad * item.item.data.pricio}</p>
                        </li>
                            
                        )
                }
            </ul>
            <div className="TotalPrice">
                <p>TOTAL DE LA COMPRA: $ {data.precioTotal}</p>
            </div>
            
            <div className="conteinerBtn">
                <button className="btnClear" onClick={handleClickClear}>LIMPIAR CARRITO</button>

                <Link className="btnFinish" to='/checkout'>FINALIZAR COMPRA</Link>
            </div>
        </div>
    )
}

export default Cart