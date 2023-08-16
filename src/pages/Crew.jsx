import React, { useState } from 'react'
import { crew } from "../starter-code/data.json"
import { BsCircle } from "react-icons/bs"
const Crew = () => {

  const [people] = useState(crew)
  const [value, setValue] = useState(0)

  const { name, bio, images, role } = people[value]


  return (
    <>
      <section className=' section crew   px-5 ' >
        <div className='overlay pt-48 lg:pt-44  ' >
          <h1 className='heading  text-white tracking-widest font-light  ' > <span className='text-gray-400 font-bold mr-1 ' >01</span>
            MEET YOUR CREW</h1>

          <article className='' >


            <h3 className='text-gray-500 text-2xl lg:text-3xl uppercase tracking-widest ' >{role}</h3>
            <h2 className='text-white text-5xl mt-6 mb-5 uppercae tracking-widest font-thin ' >{name}</h2>
            <p className=' pb-10  font-light primary-color  ' >{bio}</p>



            <div>
              {
                people?.map((_, index) => (
                  <button key={index} onClick={() => setValue(index)}
                    className={` mx-2  text-white relative top-0 md:top-12 lg:top-48    `}
                  >
                    <BsCircle className={`   rounded-full   ${index === value ? "bg-white    " : "bg-gray-700 "}  `} />

                  </button>
                ))
              }
            </div>



          </article>



          <article className=' w-8/12  md:w-3/6 lg:w-auto' >

            <img className=' block mx-auto w-full  ' src={images.png} alt={name} title={name} />

          </article>






        </div>




      </section>

    </>
  )
}

export default Crew