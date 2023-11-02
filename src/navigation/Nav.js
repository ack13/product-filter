import React from 'react'
import styled from 'styled-components';
import {FiHeart}from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd}from 'react-icons/ai'


function Nav({handleInputChange, query}) {
  return (
    <Container>
        <nav>
        <div className='nav-container'>
            <input
            type="text"
            onChange={handleInputChange}
            value={query}
            className="search-input"
            placeholder="Enter your search shoes."
            />
        </div>

        <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
        </div>
    </nav>

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
nav {
    display: flex;
    border-bottom: 2px solid #f3f3f3;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    z-index: 999;
    margin-left: 2rem;
  }
  
  input {
    padding: 12px 20px;
    border: none;
    background: #f7f6f6;
    outline: none;
    margin-right: 20px;
    border-radius: 5px;
    position: relative;
    width: 14rem;
  }
  
  .nav-icons {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 2rem;
  }

 
`


export default Nav