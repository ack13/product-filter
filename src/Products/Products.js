import React from 'react'
import styled from 'styled-components'

function Products({result}) {
  return (
    <Container>
        <section className='card-container'>
           {result}
        </section>
        

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
.card-container {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20rem;
    margin-top: 2rem;
    z-index: -2;
  }
  
  .card {
    margin: 20px;
    border: 2px solid #ededed;
    padding: 20px;
    cursor: pointer;
  }
  
  .card-img {
    width: 13rem;
    margin-bottom: 1rem;
  }
  
  .card-title {
    margin-bottom: 1rem;
  }
  
  .card-reviews {
    margin-bottom: 1rem;
    display: flex;
  }
  
  .rating-star {
    color: #d5ab55;
  }
  
  .total-reviews {
    font-size: 0.9rem;
    margin-left: 10px;
  }
  
  .card-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .bag-icon {
    color: #535353;
  }

  @media (max-width: 768px) {
    /* Media query for responsive design */
    .card-container {
      margin-left: 25%;
      align:center;
       /* Remove left margin on smaller screens */
    }
  }
`

export default Products