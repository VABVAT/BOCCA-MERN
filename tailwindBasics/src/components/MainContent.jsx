import Card from './Card.jsx'
import p1 from '/p1.png'
import tb from '/tb.png'
import Textcontent from './Textcontent.jsx';
import Banner from './Banner.jsx'

function MainContent() {
    return (
        <>
            <div className='flex flex-wrap'>
                <div className='flex flex-wrap justify-center align-center w-76 md:w-706 mt-40 ml-0 md:ml-20'>
                    <Card text="Product 1" im={p1} price="$12.99" />
                    <Card text="Product 2" im={p1} price="$12.99" />
                    <Card text="Product 3" im={p1} price="$12.99" />
                    <Card text="Product 4" im={p1} price="$12.99" />
                </div>
                <div className='flex ml-auto sm:ml-40 mr-auto sm:mr-0  items-center justify-center'><Textcontent /></div>
            </div>
            <Banner im={tb} />
        </>
    )
}
export default MainContent