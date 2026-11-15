import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useFetch from "../hook/useFetch";
import Loading from "../components/Loading";


function Home() {
  const { data, error, loading } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <Loading/>
  }

  return (
    <>
      {/* hero section */}
      <section className='flex h-[550px] items-center bg-[#323d4e] px-4 font-sans text-white md:px-24'>
        <div>
          <h1 className='text-4xl font-bold uppercase leading-tight sm:text-6xl lg:text-7xl'>
            Discover Amazing Products
          </h1>

          <p className='mt-3 max-w-[640px] text-base leading-relaxed sm:text-lg'>
            Browse our collection of high-quality products with affordable
            prices and fast delivery. Find exactly what you need today.
          </p>

          <button className='cursor-pointer mt-9 rounded bg-white px-5 py-2.5 text-base font-medium text-black transition hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#323d4e]'>
            Shop Now
          </button>
        </div>
      </section>
      {/* products section */}

      <section className='bg-gray-100 py-12 px-24'>
        <h3 className=' text-center text-2xl font-bold text-gray-800'>
          Featured Products
        </h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 mt-8'>
          {data.map((item) => {
            return (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className='bg-white p-4 rounded-2xl shadow'>
                <div className='bg-white p-4 rounded-2xl shadow'>
                  <img
                    key={item.id}
                    className='w-full h-[260px] object-contain border p-3 rounded '
                    src={item.image}
                    atl=''/>
                  <div className='text-center mt-1.5'>
                    <p className='line-clamp-1'>{item.title}</p>
                    <p className='text-red-500 font-bold'>${item.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
