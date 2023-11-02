import React from 'react'
import Category from './category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import styled from 'styled-components'
function Sidebar({handleChange}) {
  return (
    <Container>
        <>
    <section className='sidebar'>
        <div className='logo-container'>
            <h1>
            🛒
            </h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>

    </section>

    </>

    </Container>
    
  )
}

const Container=styled.div`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
  a {
    text-decoration: none;
    color: rgb(97, 97, 97);
  }
  
  li {
    list-style: none;
  }
  
  .btns {
    padding: 10px 20px;
    margin-right: 6px;
    background: transparent;
    border: none;
    border: 0.6px solid #ccc;
    border-radius: 5px;
    color: #323232;
    cursor: pointer;
  }
.sidebar {
    width: 15%;
    position: fixed;
    height: 100%;
    border-right: 2px solid #e5e5e5;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow:auto;
    &::-webkit-scrollbar {
        width: 9px; /* Width of the scrollbar track */
      }
      
  }
  
  .logo-container {
    margin-bottom: 4rem;
  }
  
  .logo-container h1 {
    margin-top: 1.3rem;
  }

  @media (max-width: 768px) {
    /* Media query for responsive design */
    .sidebar {
      width: 100%;
      position: static; 
      border: none; 
      overflow: visible; 
    }
  }
`

export default Sidebar