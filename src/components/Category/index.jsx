import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import products from '../../Productos'
import ProductList from '../Category/ProductsList/ProductsList'
import {getFirestore} from '../../db/index'
import './Products.css'

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
        
        <section className='ProductsListConteiner'>
            <h2>{name}</h2>
            {/* <p>Pruebas</p> */}
            {/* {
                prods.map(item =>
                    <p>
                        {item.titulo}
                    </p>)
            } */}
            
            <ProductList products={prods}/>
        </section>
    )
}

export default Category