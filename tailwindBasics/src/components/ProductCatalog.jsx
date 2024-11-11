import { useEffect } from 'react';
import Card from './Card.jsx'
import useFetch from '../Hooks/useFetch.js';
function ProductCatalog(){
    const Products = useFetch("https://bocca-mern-gis9-pmrxijpe9-vabvats-projects.vercel.app/productInfo")
    console.log(Products);
    return(<>
    <div className='mt-12 mb-12 flex flex-wrap flex-row justify-evenly overflow-hidden'>
        {/* {Array(Products.products.length).fill(0).map((_, index) => (<div> <Card text={prodInfo[index].text} price={prodInfo[index].price}/> </div>))} */}
    </div>
    </>)
}
export default ProductCatalog;
