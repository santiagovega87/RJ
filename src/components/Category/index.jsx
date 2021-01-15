import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import products from '../../Productos'
import productList from '../Category/ProductsList/ProductsList'


const Category = () => {
    const {name} = useParams()
    const [prods, setProds] = useState([])

    // useEffect(() => {
    //     console.log(name)        
    // }, [name])

    useEffect(()=>{
        if(name) {
            setProds(products.filter(prod => prod.category === name))
            console.log(prods)
        }
    }, [name])

    
    return (
        <>
            <h1>{name}</h1>
            {/* <p>Pruebas</p> */}
            {
                prods.map(item =>
                    <p>
                        {item.titulo}
                    </p>)
            }
            
            <productList products={prods}/>
        </>
    )
}

export default Category