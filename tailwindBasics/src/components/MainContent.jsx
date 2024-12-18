import Card from './Card.jsx'
import p1 from '/p1.png'
import tb from '/tb.png'
import Textcontent from './Textcontent.jsx';
import Banner from './Banner.jsx'
import Pb from '/Pb.jpeg'
import { useState } from 'react';
import Slidebar from './SLidebar.jsx'

function MainContent() {
    return (
        <>
            <div className='flex flex-wrap align-center items-center'>
                <div className='flex flex-wrap justify-center align-center items-center w-706 mt-40'>
                    <Slidebar />
                </div>
                <div className='flex ml-auto sm:ml-40 mr-auto sm:mr-0'><Textcontent /></div>
            </div>
            <Banner im={tb} />
        </>
    )
}
export default MainContent