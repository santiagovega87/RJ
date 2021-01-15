import {useContext} from 'react'
import products from '../../Productos'
import {Store} from '../../store/index'


const Cart = () => {

    const [data, setData] = useContext(Store)

    const handleClickClear = () => {
        setData({
            cantidad: 0,
            items: [],
        })
    }

    return (
        <div>
            <h1>ESTAMOS DENTRO DEL CARRITO--- solo falta llenarlo</h1>
            {
                data.items.map(item => <h1>{item.titulo}</h1>)
            }
            
            <button onClick={handleClickClear}>LIMPIAR CARRITO</button>
        </div>
    )
}

export default Cart