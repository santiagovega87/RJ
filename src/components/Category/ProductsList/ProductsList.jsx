import ProductCard from '../../global/ProductCard/ProductCard'
import {useEffect, useState} from 'react'

const ProductList = ({products}) => {


    return(
        <section className="products">
            <div>
                <ul>
                    {
                        products.map(item => 
                        <li key={item.id}>
                            {/* <p>{item.titulo}</p> */}
                            <ProductCard
                            id={item.id}
                            titulo={item.titulo} 
                            precio={item.precio}
                            img={item.img}
                            />
                        </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default ProductList

