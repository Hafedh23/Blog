import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Sidebar from './Sidebar';
export default function Header() {
  return (
    <div>
     <Navbar className='navbar' >
        <Container >
          <Navbar.Brand style={{ color: 'white'  }} href="#home">Oline store</Navbar.Brand>
        </Container>
      <Sidebar/>
        
      
   
        </Navbar>
    </div>
  )
}
