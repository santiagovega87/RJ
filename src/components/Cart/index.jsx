import {useContext} from 'react'
import products from '../../Productos'
import {Store} from '../../store/index'


const Cart = () => {

    const [data, setData] = useContext(Store)

    console.log(data)

    const handleClickClear = () => {
        setData({
            cantidad: 0,
            items: [],
        })
    }

    return (
        <div>
            <h1>ESTAMOS DENTRO DEL CARRITO--- solo falta llenarlo</h1>
            <ul>
                {
                    data.items.map(item => 
                        <li>
                            <h1>{item.item.titulo}</h1>
                            <p>{item.cantidad}</p>
                            <p>{item.item.precio}</p>
                            <p>{item.cantidad*item.item.precio}</p>
                        </li>
                            
                        )
                }
            </ul>
            
            <button onClick={handleClickClear}>LIMPIAR CARRITO</button>
        </div>
    )
}

export default Cart