import React from 'react'
import Header from '../components/Header'
import Listearticles from '../components/Listearticles'
import Navigationbar from '../components/Navigationbar'
import Shoppingarticles from '../components/Shoppingarticles'

export default function Home() {
  return (
    <div>
       <Header/>
     
       
        <Navigationbar/>
        <Listearticles/>
      
    </div>
  )
}
