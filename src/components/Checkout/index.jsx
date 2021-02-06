import {useContext} from 'react'
import {Store} from '../../store/index'


const Checkout = () => {
    const [data, setData] = useContext(Store)

    console.log(data)

    return(
        <section>
            <div>
                <h1>Estas en el CHECKOUT</h1>
                <p>Total de la compra: $ {data.precioTotal}</p>
                <form action="">
                    <input type="text" placeholder='Nombre'/>
                    <input type="text" placeholder='Apellido'/>
                    <input type="text" placeholder='E-Mail'/>
                    <input type="text" placeholder='Cel'/>
                    <input type="text" placeholder='Credit-Cart'/>
                    <input type="text" placeholder='Fecha de vencimiento'/>
                    <input type="text" placeholder='Codigo de seguridad'/>
                </form>
                <button>PAGAR</button>
            </div>
        </section>
    )
}

export default Checkout