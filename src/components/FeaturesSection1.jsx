import React from 'react'
import Image from '../images/feature-1-img.png'

const FeaturesSection1 = () => {
  return (
      <section className='pb-[30px] lg:pb-[120px] pt-0'>
          <div className='flex flex-col lg:flex-row'>
              <div data-aos='fade-right' data-aos-offset='400' className='max-w-[454px] mb-6 lg:mt-10'> 
                  
              {/* text */}
              <h3 className='h3 mb-6'>Invest smart</h3>
              <p className='text-gray mb-8'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
              <button className='btn px-8'>Learn More</button>

              </div>
              {/* image */}
              <div className='flex-1 flex justify-end' data-aos='fade-left' data-aos-offset='400'>
                  <img src={Image} alt="" />
              </div>

              
          </div>
      
    </section>
  )
}

export default FeaturesSection1
