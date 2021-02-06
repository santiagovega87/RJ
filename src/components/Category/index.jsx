import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import products from '../../Productos'
import ProductList from '../Category/ProductsList/ProductsList'
import {getFirestore} from '../../db/index'

const Category = () => {
    const {name} = useParams()
    const [prods, setProds] = useState([])

    const db = getFirestore();

    // useEffect(() => {
    //     console.log(name)        
    // }, [name])

    useEffect(()=>{
        if(name) {
            db.collection('productos').where('category', '==', name).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                    console.log(doc.data())
                })
                setProds(arr);
                
                console.log(arr)
            })
            
            // setProds(products.filter(prod => prod.category === name))
            // console.log(prods)
            
        }
        
    }, [name])

    console.log(prods)

    
    return (
        <>
            <h1>{name}</h1>
            {/* <p>Pruebas</p> */}
            {/* {
                prods.map(item =>
                    <p>
                        {item.titulo}
                    </p>)
            } */}
            
            <ProductList products={prods}/>
        </>
    )
}

export default Category