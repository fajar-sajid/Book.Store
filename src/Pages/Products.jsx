import React, { useState } from 'react';
import NavProduct from './NavProduct';
import Books from './Books';
import Recommend from './Recommend';
import Sidebar from './Sidebar';
import product from '../db/data.js';
import Category from './Category';
import Card from '../productcomp/Card';

const Products = () => {

  const[selectedCategory,setSelectedCategory]=   useState(null); //track the category selected for filtering
  const[query,setQuery]=useState(""); //text base filtering entered by user

  //take the value from input field
  const handleInputChange=(event)=>{
    setQuery(event.target.value);
  };

  //all titles to lower case ....... query (title entered by user) to lower case ......query===title
  const filteredItems= product.filter((products)=> products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1);

  // Radio Filter
  const handleChange= (event) =>{
    setSelectedCategory(event.target.value);
  };

  // Buttons Filter
  const handleClick=(event)=>{
    setSelectedCategory(event.target.value);
  };

  function filteredData(product,selected,query){
    let filteredProducts=product;
  
    // Filter by query
    if (query){
      filteredProducts=filteredProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    // Filter by selected criteria
    if (selected){
      filteredProducts=filteredProducts.filter(
        ({category,company,newPrice,title}) =>
          category===selected|| company===selected|| newPrice===selected||title===selected);
    }
  
    // Map to Card components
    return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice,category}) => (
      <Card
        key={title}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        category={category}
      />
    ));
  }
  

  const result=filteredData(product,selectedCategory,query);

  return (
    <div  className='min-h-[550px]'>
      
        
        
        
        
        <NavProduct query={query} handleInputChange={handleInputChange} />
      
     
      <Recommend handleClick={handleClick} />
      <Books result={result}/>
    </div>
  );
};

export default Products;

