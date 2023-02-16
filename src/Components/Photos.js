import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from 'react-router-dom';
import 'lazysizes';
const Photos = () => {
     const [photos,setPhotos]=useState([])
	const [error, setError] = useState(null);
 
  useEffect(() => {
	try {
	  axios.get('http://localhost:5000/photos')
	    .then(response => {
		setPhotos(response.data);
	    });
	} catch (error) {
	  setError(error);
	}
   }, []);
   if(!photos){
	return <h1>loading...</h1>
  }
  async function  dawnloadImage(a){
	const image = await fetch(a)
	const imageBlog = await image.blob();
	const imageURL = URL.createObjectURL(imageBlog);
	const link = document.createElement('a')
	link.href = imageURL
	link.download = 'image file name here'
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
  }
     return (
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 '>
               {photos.map((photo )=>{
						return(
						<>
					
                           <div className=''>
                           <div class="relative block group ">
                            <Link to={`/photo/${photo._id}`} className="cursor-pointer">
  <img data-sizes="auto"
    data-src={photo.photoLink}
    alt=""
    class=" lazyload blur-up w-full object-cover transition duration-500 group-hover:opacity-90 h-60 border border-secondary rounded-sm"
    />
  <div class="absolute inset-0 flex  items-end shadow-black justify-between p-6 z-20">
    <h3 class="text-xl font-bold text-secondary w-full   ">Human</h3>
    <span onClick={()=>dawnloadImage(photo.photoLink)}
      class="inline-block p-2 rounded-md mt-3 text-xs  tracking-wide uppercase bg-gray-100 border border-secondary"
      >
     <HiOutlineDownload className='text-xl'/>
    </span>
  </div>
      </Link>
</div>
                           </div>

    </>				)})}
         
  
          </div>
     );
};

export default Photos;