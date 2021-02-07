import {useState ,useContext} from 'react'
import {Store} from '../../store/index'
import {app, getFirestore} from '../../db/index'
import firebase from 'firebase/app'
import './Checkout.css'



const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    // const [venta, completoVenta] = useState(false);
    const [venta, completoVenta] = useState(false)

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        cel: '',
        credit: '',
        vencimiento: '',
        code: '',
    })

    // console.log(data)

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const [idCompra, setIdCompra] = useState('')

    const compra = {
        user: formData,
        items: data.items,
        precioTotal: data.precioTotal,
        fecha: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true)
            console.log(id)
            setIdCompra(id)
            handleClickClear()
        })
        .catch(e => console.log(e))
    }

    // console.log(formData)

    const handleClickClear = () => {
        setData({
            cantidad: 0,
            items: [],
            precioTotal: 0,
        })
    }

    return(
        <section className="checkout">
            <div className="conteinerCheck">
                <h1>Estas en el CHECKOUT</h1>

                {
                    !venta ? 

                    <div className="ConteinerForm">
                        <p>Total de la compra: $ {data.precioTotal}</p>

                        <form onSubmit={handleSubmitForm}>

                            <input type="text" value={formData.nombre} placeholder='Nombre' name='nombre'  onChange={handleChangeInput}/>
                            <input type="text" placeholder='Apellido' name='apellido'value={formData.apellido} onChange={handleChangeInput}/>
                            <input type="text" placeholder='E-Mail' name='email' value={formData.email} onChange={handleChangeInput}/>
                            <input type="tel" placeholder='Cel' name='cel' value={formData.cel} onChange={handleChangeInput}/>
                            <input type="number" placeholder='Credit-Cart' name='credit' value={formData.credit} onChange={handleChangeInput}/>
                            <input type="text" placeholder='Fecha de vencimiento' name='vencimiento' value={formData.vencimiento} onChange={handleChangeInput}/>
                            <input type="number" placeholder='Codigo de seguridad' name='code' value={formData.code} onChange={handleChangeInput}/>

                            <button>PAGAR</button>
                        </form>
                    </div> :

                    <p>LA COMPRA FINALIZO CORRECTAMENTE, N° DE SEGUIMIENTO: {idCompra}</p>
                }
                
            </div>
        </section>
    )
}

export default Checkout