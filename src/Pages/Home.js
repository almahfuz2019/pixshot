import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';
import "../App.css"
const Home = () => {
  const [search,setSearch]=useState("");
  const[productLoading,setProductLoading]=useState(true);
  const[products,setProducts]=useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(()=>{
    const url=`http://localhost:5000/photossearch?keyWord=${search}`;
    console.log(url);
    if(search!==""){
      setProductLoading(true)
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
      
        setProductLoading(false)
      })
    }else if(search===""){
      // fetchProducts()
    }
  },[search])
     return (
    <>
      
       <div style={{ backgroundImage: `url("https://images.pexels.com/photos/1424536/pexels-photo-1424536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }} className="h-96   overflow-hidden bg-cover flex justify-center items-center">
      <div className='w-1/2'>
<h1 className='font-bold text-4xl text-center mb-6 text-secondary'>The best free stock photos for youtube,facebook and blogs (9 x 16) </h1>
{products.length}
 
  <div className="relative mt-1 rounded-full shadow-sm w-full border-secondary border-2">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
    <span className="text-gray-500 sm:text-sm "><BsSearch /></span>
    </div>
    <input type="text" name="price" id="price" className="block w-full rounded-full border-gray-300 pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-4" placeholder="Search here" onChange={handleSearch}/>
    <div className="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" className="sr-only">Currency</label>
      <select id="currency" name="currency" className="h-full rounded-full border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        <option>All</option>
        <option>Cat</option>
        <option>Cow</option>
      </select>
    </div>
  </div>
  <p className='mt-2'>Trending:roses, valentines, valentine, heart, clouds</p>
</div>
</div>
<div className='mx-auto mt-6'>
               
               <div className="inline-flex rounded-md shadow-sm" role="group">
                 <Link to="/" type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700      ">
                   <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                   Photos
                 </Link>
                 <Link to="videos" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700      ">
                   <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                   Settings
                 </Link>
                 <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700      ">
                   <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
                   Downloads
                 </button>
               </div>
               <div>
               </div>
                         </div>
                    <Outlet/>
</>
     );
};
export default Home;