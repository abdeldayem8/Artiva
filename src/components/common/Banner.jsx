import React, { useState } from 'react'
import productsdata from '../../products.json'
import { Link } from 'react-router-dom';
const title = (
    <h2>Search Your One from <span>Thousand</span> of Products</h2>
)

const description = "We have the largest Collection of  Products"

const bannerList = [ { iconName: "icofont-users-alt-4", text: "1.5 Million Customers", }, { iconName: "icofont-notification", text: "More then 2000 Marchent", }, { iconName: "icofont-globe", text: "Buy Anything Online", }, ];

const Banner = () => {
    const [searchInput,setSearchinput]=useState("");
    const [filteredproducts,setFilteredproducts]=useState(productsdata);
     
    // search function
    const handleSearch = e =>{
      const searchTerm = e.target.value;
      setSearchinput(searchTerm);
    //   filter search based on products
    const filtered = productsdata.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredproducts(filtered);
    }
  return <>
  <div className='banner-section style-4'>
    <div className='container'>
     <div className='banner-content'>
     {title}
     <form>
        <input type='text' name='search' id='search' placeholder='Search your product' value={searchInput} onChange={handleSearch}/>
     </form>
     <p>{description}</p>
     <ul className='lab-ul'>
        {
            searchInput && filteredproducts.map((product,i)=> <li key={i}> <Link to={`/shop/${product.id}`}>{product.name}</Link>
            </li>)
        }
     </ul>
     </div>
    </div>
  </div>
  </>
}

export default Banner
