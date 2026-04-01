
import Nav from './component/navbar/Nav'
import Banner from './component/Banner/Banner'
import Stats from './component/Stats/stats'
import Toggle from './component/BtnToggle/toggle'
import CardContainer from './component/cardContainer/CardContainer'
import Step from './component/Steps/step'
import Price from './component/priceing/price'
import Footer from './component/footer/footer'
import Addcart from './component/cardContainer/Addcart'


import './App.css'
import { useState } from 'react'

const jsonDataPromise = fetch('../public/data.json').then(res => res.json())
//const pricefetch = fetch('../public/price.json').then(res => res.json())

function App() {

  const [product, setProduct] = useState('product')
  const [cart, setCart] = useState([])

  return (
    <>
      <Nav cart={cart}/>
      {/* <Banner/>
     <Stats/> */}

      <Toggle
        product={product}
        setProduct={setProduct}
        cart={cart} />
      {
        product === 'product' ? 
          <CardContainer
          jsonDataPromise={jsonDataPromise}
          cart={cart}
          setCart={setCart} />
          :
          <Addcart cart={cart} setCart={setCart}/>

      }

      {/* <Step/>
     <Price pricefetch={pricefetch}/>
     <Footer/> */}
    </>
  )
}

export default App
