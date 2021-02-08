import {useState ,useContext} from 'react'
import {Store} from '../../store/index'
import {app, getFirestore} from '../../db/index'
import firebase from 'firebase/app'
import './Checkout.css'



const Checkout = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);

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

                            <input type="text" value={formData.nombre} placeholder='Nombre' name='nombre'  onChange={handleChangeInput} required/>
                            <input type="text" placeholder='Apellido' name='apellido'value={formData.apellido} onChange={handleChangeInput} required/>
                            <input type="text" placeholder='E-Mail' name='email' value={formData.email} onChange={handleChangeInput} required/>
                            <input type="tel" placeholder='Cel' name='cel' value={formData.cel} onChange={handleChangeInput} required/>
                            <input type="number" placeholder='Credit-Cart' name='credit' value={formData.credit} onChange={handleChangeInput} required/>
                            <input type="text" placeholder='Fecha de vencimiento' name='vencimiento' value={formData.vencimiento} onChange={handleChangeInput} required/>
                            <input type="number" placeholder='Codigo de seguridad' name='code' value={formData.code} onChange={handleChangeInput} required/>

                            <button>PAGAR</button>
                        </form>
                    </div> :

                    <p>LA COMPRA FINALIZO CORRECTAMENTE, N° DE SEGUIMIENTO: <strong>{idCompra}</strong></p>
                }
                
            </div>
        </section>
    )
}

export default Checkout