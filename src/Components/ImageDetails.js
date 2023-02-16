import React, { useEffect, useState } from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import Loading from './Loading';
const ImageDetails = () => {
  const [newProducts,setNewProducts]=useState([])
     const [singlePhoto,setSinglePhoto]=useState({})
     const { id } = useParams();
     const[productLoading,setProductLoading]=useState(true);
     useEffect(() => {
          setProductLoading(true)
             const url = `http://localhost:5000/photo/${id}`;
             fetch(url)
                 .then(res => res.json())
                 .then(data =>{
                    setSinglePhoto(data)
                   setProductLoading(false)
                   fatchcategory(singlePhoto.category)
                  });
         },[id,singlePhoto.category]);
         async function  dawnloadImage(a){
          const image = await fetch(a)
          const imageBlog = await image.blob();
          const imageURL = URL.createObjectURL(imageBlog);
          const link = document.createElement('a')
          link.href = imageURL
          link.download = 'pixshot'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
       }
       const fatchcategory=(a)=>{
        setProductLoading(true)
        const url= `http://localhost:5000/photosearchbycategorywithlimit?category=${a}`;
      // console.log(data);
      console.log(url);
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setNewProducts(data)
      })
      
      setProductLoading(false)
      }
      // useEffect(()=>{
      //   fatchcategory(singlePhoto.category)
      // },[id])
  
     if(productLoading){
      return <Loading/>
     }
     return (
          <div>
<section>
  <div class="relative mx-auto w-full container px-2 py-8">
    <div>
      <h1 class="text-2xl font-bold lg:text-3xl">{singlePhoto.category}</h1>

    </div>

    <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
      <div class="lg:col-span-3">
        <div class="relative  " >

        <TransformWrapper>
        <TransformComponent>
<div className='cursor-zoom-in'>
          <img
            alt="Tee"
            src={singlePhoto.photoLink}
            class="h-72 w-full rounded-xl object-cover lg:h-[540px]   shadow-secondary shadow-md  border border-secondary "
            /> 
            </div>
            </TransformComponent>
            </TransformWrapper>
          <div
            class="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
          >
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>

            <span class="ml-1.5 text-xs"> Hover to zoom </span>
          </div>
        </div>

     
      </div>

      <div class="lg:sticky lg:top-0">
        <div class="space-y-4 lg:pt-8">
          <fieldset>
            <legend class="text-xl font-bold">Colors</legend>

            <div class="mt-2 flex gap-1">
              <label for="color_green" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_green"
                  name="color"
                  class="peer sr-only"
                  checked
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>

              <label for="color_blue" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_blue"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>

              <label for="color_pink" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_pink"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>

              <label for="color_red" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_red"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>

              <label for="color_indigo" class="cursor-pointer">
                <input
                  type="radio"
                  id="color_indigo"
                  name="color"
                  class="peer sr-only"
                />

                <span
                  class="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                ></span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend class="text-2xl font-bold">Keyworkds</legend>

            <div class="mt-2 flex gap-1">
              <label for="material_cotton" class="cursor-pointer">
                <input
                  type="radio"
                  id="material_cotton"
                  name="material"
                  class="peer sr-only"
                  checked
                />

                <span
                  class="block rounded-full border border-secondary px-3 py-1 text-xs peer-checked:bg-gray-100"
                >
                  Cotton
                </span>
              </label>

              <label for="material_wool" class="cursor-pointer">
                <input
                  type="radio"
                  id="material_wool"
                  name="material"
                  class="peer sr-only"
                  checked
                />

                <span
                  class="block rounded-full border border-secondary px-3 py-1 text-xs peer-checked:bg-gray-100"
                >
                  Wool
                </span>
              </label>
            </div>
          </fieldset>

          <div class="rounded border bg-gray-100 p-4">
            <p class="">
              <span class="block"> Please read our terms and condition. We provide  free image... </span>

              <Link to="" class="mt-1 inline-block underline"> read more </Link>
            </p>
          </div>

          <div>
            <p class="text-2xl font-bold">Country: Bangladesh</p>
          </div>
          <button onClick={()=>dawnloadImage(singlePhoto.photoLink)}
      class="flex justify-center items-center w-full btn p-2 rounded-md mt-3   tracking-wide uppercase   border border-secondary  bg-secondary text-white font-normal"
      >
     <HiOutlineDownload className='mr-3 text-3xl font-bold'/>  <span className='text-xl'>Free Dawnload</span>
    </button>
          
        </div>
      </div>

   
    </div>
  </div>
</section>
<div className='grid grid-cols-1 lg:grid-cols-4 gap-4 '>
               {newProducts.map((photo )=>{
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
          </div>
     );
};
export default ImageDetails;