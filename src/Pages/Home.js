import React, { useEffect, useState } from 'react';
import { BsCameraVideo, BsSearch } from 'react-icons/bs';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MdAudiotrack } from "react-icons/md";
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
      
       <div style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2021/08/20/22/05/flowers-6561379_960_720.jpg")` }} className="bg-img  overflow-hidden bg-cover flex justify-center items-center ">
        
      <div className='mx-4 lg:mx-0 '>
<h1 className='font-bold text-3xl lg:text-6xl uppercase text-center  text-white mb-8'> Best free photos collection
</h1>
<p className='text-white '>Over 2.7 million+ high quality stock images shared by our talented community.</p>
{/* {products.length} */}
 
  <div className="relative mt-1 rounded-lg shadow-sm w-full  ">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
    <span className="text-gray-500 sm:text-sm "><BsSearch /></span>
    </div>
    <input type="text" name="price" id="price" className="block w-full rounded-lg border-gray-300 pl-10 pr-12 focus:border-indigo-500 focus:ring-indigo-500  py-3  text-gray-900 " placeholder="Search for free photos" onChange={handleSearch}/>
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 bg-gray-200 rounded-full my-2 mr-2 px-2">
      <label for="currency" className="sr-only">Currency</label>
      <select id="currency" name="currency" className="h-full rounded-lg border-transparent bg-transparent py-0 pl-2 pr-2 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
        <option>All</option>
        <option>Cat</option>
        <option>Cow</option>
      </select>
    </div>
  </div>
  <p className='my-2 text-white'>Trending: roses, valentines, valentine, heart, clouds</p>
</div>
</div>
<div className='mx-auto  flex my-5 lg:ml-4 items-center justify-center lg:items-start lg:justify-start'>
               
               <div className="inline-flex border border-gray-300 rounded-lg" role="group">
                 <NavLink to="/" type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-r-2 border-gray-700 rounded-l-lg  hover:text-text-gray-500 focus:z-10 ">
                   <HiOutlinePhotograph className='text-lg mr-2'/>
                   Photos
                 </NavLink>
                 <NavLink to="videos" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-r-2 border-gray-700   hover:text-text-gray-500 focus:z-10 ">
                  <BsCameraVideo className='text-lg mr-2'/>
                   Videos
                 </NavLink>
                 <NavLink to="sound-effect" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white  border-gray-700 rounded-r-lg  hover:text-text-gray-500 focus:z-10 ">
                  <MdAudiotrack className='text-lg mr-2'/>
                   Sound Effects
                 </NavLink>
               </div>
               <div>
               </div>
                         </div>
                        {/* <p className='pl-9 text-xl font-semibold'>Recommended For You</p> */}
                    <Outlet/>
</>
     );
};
export default Home;