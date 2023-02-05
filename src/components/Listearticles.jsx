import { useState} from "react";
import React from 'react'
import Article from './Article'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/images/nike-dunk 1.png'
export default function Listearticles() {
    const artcilesliste=[
      {id:0,title:'Nike shoes',img:img1,category:'Snikears',price:'150'},
      {id:1,title:'Nike shoes',img:img1,category:'Snikears',price:'150'},
      {id:2,title:'Nike shoes',img:img1,category:'Snikears',price:'150'},
      {id:3,title:'Nike shoes',img:img1,category:'Snikears',price:'150'},
      {id:4,title:'Nike shoes',img:img1,category:'Snikears',price:'150'},
      {id:6,title:'Nike shoes',img:img1,category:'Snikears',price:'150'}
    ]

  return (
    <div>

    <div className='gridcontainer'>
    {artcilesliste
      // .filter((article) =>article.title.includes(search.toLowerCase()))
      .map((article) => (<Article className='griditem' item={article}   />))}
  </div>
  </div>
  )
}
