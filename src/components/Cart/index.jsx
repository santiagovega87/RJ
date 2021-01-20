import {useContext} from 'react'
import { Link } from 'react-router-dom'
import products from '../../Productos'
import {Store} from '../../store/index'


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
        <div>
            <h1>ESTAMOS DENTRO DEL CARRITO--- solo falta llenarlo</h1>
            <ul>
                {
                    data.items.map(item => 
                        <li>
                            <h1>Articulo: {item.item.titulo}</h1>
                            <p>Cant: {item.cantidad}</p>
                            <p>Precio: $ {item.item.precio}</p>
                            <p>Sub Total: $ {item.cantidad*item.item.precio}</p>
                        </li>
                            
                        )
                }
            </ul>
            <div>
                <p>TOTAL DE LA COMPRA: $ {data.precioTotal}</p>
            </div>
            
            <button onClick={handleClickClear}>LIMPIAR CARRITO</button>

            <Link to='/checkout'>FINALIZAR COMPRA</Link>
        </div>
    )
}

export default Cart