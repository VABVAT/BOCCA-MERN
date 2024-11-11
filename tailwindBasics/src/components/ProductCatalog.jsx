import Card from './Card.jsx'
function ProductCatalog(){
    const prodInfo = [{
        text: 'Item Name',
        price: '$5.99'
    }, {
        text: 'Item Name',
        price: '$5.99'
    }, {
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    },{
        text: 'Item Name',
        price: '$5.99'
    }]
    return(<>
    <div className='mt-12 mb-12 flex flex-wrap flex-row justify-evenly overflow-hidden'>
        {Array(prodInfo.length).fill(0).map((_, index) => (<div> <Card text={prodInfo[index].text} price={prodInfo[index].price}/> </div>))}
    </div>
    </>)
}
export default ProductCatalog;
