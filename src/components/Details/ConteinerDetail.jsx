import {useEffect, useState} from 'react'
import ProductDetail from './Detail'
import {useParams} from 'react-router-dom'
import products from '../../Productos'
import {getFirestore} from '../../db/index'
import './Conteiner.css'

const Detail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null);
    const db = getFirestore()



    console.log(id)

    useEffect (()=> {
        db.collection('productos').doc(id).get()
        .then (doc => {
            if(doc.exists) {
                setProduct({id: doc.id, data: doc.data()})
            }
            console.log(product)
        })


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