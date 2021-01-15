import ProductCard from '../../global/ProductCard/ProductCard'
import {useEffect, useState} from 'react'

const productList = ({products}) => {


    return(
        <section className="products">
            <div>
                <ul>
                    {
                        products.map(item => 
                        <li key={item.id}>
                            <p>{item.titulo}</p>
                            <ProductCard
                            id={item.data.id}
                            titulo={item.data.titulo} 
                            precio={item.data.precio}
                            />
                        </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default productList

