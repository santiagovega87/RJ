import {useEffect, useState} from 'react'
import ProductDetail from './Detail'
import {useParams} from 'react-router-dom'
import products from '../../Productos'

const Detail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve({
        //         id: 1,
        //         titulo: 'Buenos Aires',
        //         precio: 1600,
        //         descripcion: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        //         img: 'https://placehold.it/150x250',
        //         })
        // }, 1000);
        const selctProducto = products.filter(item => item.id === parseInt(id))
        resolve(selctProducto[0])
    })

    useEffect (()=> {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            {
                product ?
                <div className="conteinerDetail">
                    <ProductDetail item={product} />
                    <p>{id}</p>
                </div> :
                <p>CARGANDO</p>
            }
        </>
    )
}

export default Detail