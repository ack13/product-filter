import React from 'react'
import styled from 'styled-components'
import Buttons from '../components/Buttons'

function Recommended({handleClick}) {
  return (
    <Container>
        <>
    <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
            <Buttons onClickHandler={handleClick} value="" title="All Products"/>
            <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
            <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
            <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>
            <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>




            




        </div>
    </div>
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
.recommended-flex {
    display: flex;
    margin-left: 20rem;
  }
  
  .recommended-title {
    margin-left: 20rem;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 20px;
    
  }

  @media (max-width: 768px) {
    /* Media query for responsive design */
    .recommended-flex {
      flex-direction: row;
      align-items: flex-start;
       
       
    }


    .recommended-title {
      margin-right: 10%; 
      text-align: center;
     
       width:100;
    }
  }

`

export default Recommended