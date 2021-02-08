
import ProductCard from  '../../global/ProductCard/ProductCard'
import './FeatureProducts.css'
import {useEffect, useState} from 'react'
import {getFirestore} from '../../../db/index'

const FeatureProducts = () => {
    const [items, setItems] = useState([])
    const db = getFirestore()



    const getProductsFromDb = () => {
        db.collection('productos').where('destacado', '==', 'true').get()
        .then(docs => {
            let arr = []
            docs.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                    console.log(doc.id)
                    console.log(doc.data())
                    }
                )
        
            
            setItems(arr)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
        getProductsFromDb();
    }, [])


    
    return(
        <section className="featureProducts">
            <h3>PRODUCTOS DESTACADOS</h3>
            <div>

                <ul>
                    {
                        items.map((items) => 
                        <li key={items.id}>
                            <ProductCard
                            id={items.id}
                            titulo={items.data.titulo} 
                            precio={items.data.pricio}
                            img={items.data.img}
                            />
                        </li>
                        )
                    }
                </ul>

            </div>

        </section>
    )
}

export default FeatureProducts