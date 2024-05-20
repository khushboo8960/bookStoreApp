import React from 'react';

import list from "../../public/list.json";
import Cards from './Cards';
import {Link} from "react-router-dom";

function Cource() {
  return (
  <>

  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
  <div className='mt-28 item-center justify-center text-center'>
    <h1 className='text-2xl font-bold md:text-4xl'>We're delighted to have you 
    <span className='text-pink-500'> Here! :)</span> </h1>
    <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus culpa amet porro possimus eaque provident similique eius perspiciatis. Laudantium ea consequatur asperiores quaerat blanditiis consectetur maiores eligendi ipsam tempora aut. Quod magnam, quae quasi sed hic voluptas iusto dolorum doloremque veritatis, aliquam voluptatum ut dolores aperiam adipisci alias voluptates nostrum quibusdam molestias asperiores vel eveniet. Consequuntur dolore modi facilis temporibus neque minus recusandae eos necessitatibus. Veniam fuga et neque.</p>
    <Link to= "/">
    <button className='mt-6 bg-pink-500 text-white hover:bg-pink-700 rounded-md px-4 py-2 duration-300'>Back</button>
    </Link>

  </div>
  <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
        list.map((item)=>(
          <Cards key={item.id} item={item}/>
        
        ))
      }
  </div>
  </div>
  </>
  )
}

export default Cource