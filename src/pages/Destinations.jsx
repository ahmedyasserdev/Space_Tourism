import React, { useState } from 'react'
import { destinations } from "../starter-code/data.json"
const Destinations = () => {

  const [planets] = useState(destinations)
  const [value, setValue] = useState(0)

  const { name, description, distance, travel, images } = planets[value]


  return (
    <>
      <section className=' section  destination px-5 overflow-hidden ' >
        <div className='overlay pt-20 lg:pt-40  ' >
          <h1 className='heading  text-white tracking-widest font-light ' > <span className='text-gray-400 font-bold ' >01</span>  PICK YOUR DESTINATION</h1>
          <article className='planet' >

            <img className=' block mx-auto w-full  ' src={images.png} alt={name} title={name} />

          </article>

          <article className='' >

            {
              planets?.map((planet, index) => (
                <button key={index} onClick={() => setValue(index)}
                  className={`uppercase text-white text-1xl pb-2 font-light primary-color mx-2 ${ value === index ? "border-b border-white " : null}  `}
                >{planet.name}</button>
              ))
            }


            <h2 className='text-white text-8xl mt-10 mb-5 uppercae tracking-widest font-thin ' >{name}</h2>
            <p className=' pb-10  font-light primary-color  ' >{description}</p>


            <ul className='lg:flex  md:block   text-white  gap-x-5 border-t border-gray-400   items-center  justify-between pt-10 ' >
              <li className='text-5xl md:text-4xl mb-8  md:mb-0' > <span className='block  font-light   primary-color mb-2 lg:mb-0 ' >AVG. DISTANCE</span> {distance}  </li>
              <li className='text-5xl md:text-4xl mb-8  md:mb-0' > <span className='block  font-light   primary-color mb-2 lg:mb-0 ' >EST. TRAVEL TIME</span> {travel}  </li>

            </ul>

          </article>


        </div>



      </section>

    </>
  )
}

export default Destinations