import React from 'react'
import styled from 'styled-components'
import Input from '../../components/Input'

function Category({handleChange}) {
  return (
    <Container>
         <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
    </Container>
  )
}

const Container=styled.div`

.sidebar-title {
    font-size: 22px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  
  .sidebar-items {
    margin-top: 20px;
  }
  
  .sidebar-label-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .sidebar-label-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }
  
  .all {
    background: linear-gradient(blue, crimson);
  }
  
  .sidebar-label-container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  .sidebar-label-container input:checked ~ .checkmark {
    background-color: #2196f3;
  }
  
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .sidebar-label-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .sidebar-label-container .checkmark:after {
    top: 6.4px;
    left: 6.4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
  }
  
  .line {
    margin-top: 3rem;
    border-color: #f7f7f7;
  }
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
  
`

export default Category