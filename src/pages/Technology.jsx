import React, { useState } from 'react'
import { technology } from "../starter-code/data.json"
import { BsCircle } from "react-icons/bs"
const Technology = () => {

  const [cards] = useState(technology)
  const [value, setValue] = useState(0)

  const { name,  images, description} = cards[value]


  return (
    <>
      <section className=' section technology   px-5 overflow- ' >
        <div className='overlay pt-48 lg:pt-44  ' >
          <h1 className='heading  text-white tracking-widest font-light   ' > <span className='text-gray-400 font-bold mr-1 ' >03</span>
       
          SPACE LAUNCH 101</h1>

      <div  className='flex flex-col  lg:flex-row items-center  lg:gap-x-12 gap-y-6 lg:gap-y-0 ' >

          <div>
                {
                  cards?.map((_, index) => (
                    <button key={index} onClick={() => setValue(index)}
                      className={` lg:my-6 mx-3 lg:mx-0 lg:block   text-2xl lg:text-4xl border-2 border-gray-700 hover:border-white rounded-full
                       h-20 w-20 
                      ${index === value ? "bg-white text-black " : "bg-transparent text-white "}
                       `}
                    >
                      {index + 1}
                    </button>
                  ))
                }
              </div>
        

            <article >
        
          
        
                <small  className = " primary-color tracking-widest "  >THE TERMINOLOGY...</small>
              <h2 className='text-white  text-5xl lg:text-4xl   mb-5 uppercae tracking-widest font-thin ' >{name}</h2>
              <p className=' pb-10  font-light primary-color  ' >{description}</p>
        
        
        
            
        
        
            </article>
      </div>



          <article className=' w-full' >

                <picture className='w-full'  >
                <source  media='(min-width:1024px)' srcSet={images.portrait} />
                <img className='  ' src={images.landscape} alt={name} title={name} />
                </picture>


          </article>






        </div>




      </section>

    </>
  )
}

export default Technology