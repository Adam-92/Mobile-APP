import React from 'react'
/* Import Global Context */
import { useGlobalContext } from './context/context'
/* Nav */
import Navbar from './components/Navbar'
/* Container */
import CartContainer from './components/CartContainer'


function App() {
  const {loading}= useGlobalContext();
  
   if (loading) {
     return (
       <div className='loading'>
         <h1>Loading...</h1>
       </div>
     )
   }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
