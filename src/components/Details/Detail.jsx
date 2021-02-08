import {useState, useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {Store} from '../../store/index'
import {useHistory} from 'react-router-dom'
import './Detail.css'


const ProductDetail = ({item}) => {

    const [data, setData] = useContext(Store)

    const handleClickAdd = (e) => {
        // console.log(e)
        
        // if(data.items[item].includes(item.titulo)) {
        //     console.log('Esta en el carrito')
        // } else {
        //     console.log('No esta en el carrito')
        // }

        // data.items.forEach(element => {
        //     if (item.data.titulo === element.item.data.titulo) {
        //         console.log('el item ya se encuentra')
        //         console.log(item.data.titulo)
        //         console.log(element.titulo)
        //     } else {
        //         console.log('nada')
        //         console.log(item.data.titulo)
        //         console.log(element.item.data.titulo)
        //     }
            
        // });

        // console.log(item.data.titulo)
        // data.items.forEach(element => {
        //     console.log(element.item.data.titulo)
        //     if (element.item.data.titulo == item.data.titulo) {
        //         console.log('esta en el carrito')
        //         setData({
        //             ...data,
        //             cantidad: data.cantidad + qty,
        //             items: data.cantidad + qty,
        //             precioTotal: data.precioTotal + (item.data.pricio * qty)
        //         })
        //         alert(`Producto agregado al carrito ${qty}`)
        //         break
        //     } else {
        //         console.log('no esta en el carrio')
        //         setData({
        //             ...data,
        //             cantidad: data.cantidad + qty,
        //             items: [...data.items, {item: item, cantidad:qty}],
        //             precioTotal: data.precioTotal + (item.data.pricio * qty)
        //         })
        //         alert(`Producto agregado al carrito ${qty}`)
        //         break
        //     }
        // });


        setData({
            ...data,
            cantidad: data.cantidad + qty,
            items: [...data.items, {item: item, cantidad:qty}],
            precioTotal: data.precioTotal + (item.data.pricio * qty)
        })
        alert(`Producto agregado al carrito ${qty}`)



        // console.log(data)
        // history.pushState('/cart')

        
        // data.items.forEach(e => {
        //     if(e.item.titulo === item.titulo){

        //         alert('Ya esta en el carrito')
        //     } else {
        //         setData({
        //             ...data,
        //             cantidad: data.cantidad + qty,
        //             items: [...data.items, {item: item, cantidad:qty}],
        //             precioTotal: data.precioTotal + (item.precio * qty)
        //         })
        //         alert(`Producto agregado al carrito ${qty}`)
        //         console.log(data)
        //         console.log('No esta en el carrito')
        //     }
            
        // });
        // console.log(item.titulo)
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
        <article className="DetailConteiner">
            <h1>{item.data.titulo}</h1>
            <div className="Detail">
                <img src={`/img/${item.data.img}`} alt="Imagen Descriptiva"/>
                <div className="DetailInfo">
                    <p>{item.data.description}</p>
                    <p>Precio <strong>$ {item.data.pricio}</strong></p>
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
                    <button className="btnAdd" onClick={handleClickAdd}>Agregar al carrito</button>
                </div>
            </div>

        </article>
    )
}

export default ProductDetail