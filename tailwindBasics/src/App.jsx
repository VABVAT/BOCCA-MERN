import MainContent from './components/MainContent.jsx';
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ProductCatalog from './components/ProductCatalog.jsx';
import Logincmp from './components/Logincmp.jsx';
import CartPage from './components/CartPage.jsx';

function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainContent />}></Route>
          <Route path='/items' element={<ProductCatalog />}></Route>
        </Route>
        <Route path='/signIn' element={<Logincmp mode="0"/>}>
        </Route>
        <Route path='/signUp' element={<Logincmp mode="1"/>}></Route>
        <Route path='/Cart' element={<CartPage/>}></Route>
      </Routes>
    </BrowserRouter>


  )
}

function Layout() {
  return (
    <div className='bg-gradient-to-b from-gstart to-gend min-h-screen min-w-screen '>
      <Header />
        <Outlet />
      <Footer />
      <br />
      <br />
    </div>
  )
}

export default App
