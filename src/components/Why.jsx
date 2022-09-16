import React from 'react'
import Image from '../images/why-img.png'

const Why = () => {
  return (
    <section className='section'>
          <div className="container mx-auto">
              <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
                  {/* image */}
                  <div data-aos='fade-right' data-aos-offset='400'>
                      <img src={Image} alt="" />
                  </div>
                  {/* text */}
                  <div data-aos='fade-left' data-aos-offset='400'>
                      <h2 className='section-title'>Why you should choose CRAPPO</h2>
                      <p className='section-subtitle'>Experience the next generation cryptocurrency platform. No financial borders, extra fees and fake reviews.</p>
                      <button className='btn px-6'>Learn More</button>
                  </div>
              </div>
      </div>
    </section>
  )
}

export default Why
