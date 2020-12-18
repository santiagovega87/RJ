
import ProductCard from  '../../global/ProductCard/ProductCard'
import './FeatureProducts.css'
import {useEffect, useState} from 'react'

const FeatureProducts = () => {
    const [items, setItems] = useState([])

    //LISTADO DE PRODUCTOS 
    const porducts = [
        {
            id: 1,
            titulo: 'Buenos Aires',
            precio: 1600,
        },
        {
            id: 2,
            titulo: 'Retinga',
            precio: 1450,
        },
        {
            id: 3,
            titulo: 'SUR',
            precio: 1300,
        },
        {
            id: 4,
            titulo: 'El Alquimista',
            precio: 1400,
        },
        {
            id: 5,
            titulo: 'HILBING',
            precio: 1000,
        },
        {
            id: 6,
            titulo: 'Apostoles 950',
            precio: 1600,
        },
        {
            id: 7,
            titulo: 'Heraclito & Macedonio',
            precio: 1200,
        },
        {
            id: 8,
            titulo: 'COMUNAL',
            precio: 1400,
        },
    ]


    //PROMESA setTime 1s
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(porducts)
        }, 1000);
    })

    useEffect(() => {
        getProducts.then(rta => setItems(rta))
    }, [])

    // Prueba en consola
    useEffect(() => {
        console.log(items)
    }, [items])

    // MAPEO DE LOS ITEMS -- parecido a un "for"
    // Prueba en consola
    useEffect(() => {
        items.map(items => console.log(items))
    }, [items])
    
    return(
        <section>

            {/*Prueba de cargando*/}
            {
                items.length ? <p>OK</p> : <p>cargando</p>
            }
            {
                items.map(items => 
                    <ProductCard titulo={items.titulo} precio={items.precio}/>
                )
            }
            {/* <ProductCard titulo='Buenos Aires' precio='$ 1600'/>
            <ProductCard titulo='Retinga' precio='$ 1450'/>
            <ProductCard titulo='SUR' precio='$ 1300'/>
            <ProductCard titulo='El Alquimista' precio='$ 1400'/>
            <ProductCard titulo='Buenos Aires' precio='$ 1600'/>
            <ProductCard titulo='Retinga' precio='$ 1450'/>
            <ProductCard titulo='SUR' precio='$ 1300'/>
            <ProductCard titulo='El Alquimista' precio='$ 1400'/> */}
        </section>
    )
}

export default FeatureProducts