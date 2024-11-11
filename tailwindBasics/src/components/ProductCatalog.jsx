import { useEffect } from 'react';
import Card from './Card.jsx'
import useFetch from '../Hooks/useFetch.js';
import Loader from './Loader.jsx';
function ProductCatalog(){
    const Products = useFetch("https://bocca-mern-gis9.vercel.app/productInfo")
    const prodInfo = Products.products;
    // console.log(Products);
    return(<>
        <div className="mt-12 mb-12 grid  place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {prodInfo ? prodInfo.map((product, index) => (
                <div key={index}>
                    <Card text={product.productName} price={product.productPrice} />
                </div>
            )) : 
                <Loader />
            }
        </div>
    </>)
}
export default ProductCatalog;
