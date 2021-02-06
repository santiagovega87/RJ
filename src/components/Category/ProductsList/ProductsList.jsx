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

                            //Le saque el DATA
                            titulo={item.data.titulo} 
                            precio={item.data.pricio}
                            img={item.data.img}
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

