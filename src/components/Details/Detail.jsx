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

        


        setData({
            ...data,
            cantidad: data.cantidad + qty,
            items: [...data.items, {item: item, cantidad:qty}],
            precioTotal: data.precioTotal + (item.data.pricio * qty)
        })
        alert(`Producto agregado al carrito ${qty}`)
        console.log(data)
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
        <article>
            <h1>{item.data.titulo}</h1>
            <img src={`/img/${item.data.img}`} alt="Imagen Descriptiva"/>
            <p>{item.data.description}</p>
            <p>$ {item.data.pricio}</p>
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