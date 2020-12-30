import {useEffect, useState} from 'react'
import ProductDetail from './Detail'

const Detail = () => {
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                titulo: 'Buenos Aires',
                precio: 1600,
                descripcion: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
                img: 'https://placehold.it/150x250',
                })
        }, 1000);
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
                </div> :
                <p>CARGANDO</p>
            }
        </>
    )
}

export default Detail