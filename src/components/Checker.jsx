import React from 'react'
import CheckForm from './CheckForm'

const Checker = () => {
  return (
    <section className='section'>
          <div className="container mx-auto">
              {/* text */}
              <div className='text-center'>
                  <h2 className='section-title' data-aos='fade-up' data-aos-offset='400'>Check how much you can earn</h2>
                  <p className='section-subtitle text-lg mb-16' data-aos='fade-up' data-aos-offset='400'>Let’s check your hash rate to see how much you will earn today.</p>
              </div>
              {/* form */}
              
                  <CheckForm/>
              
      </div>
    </section>
  )
}

export default Checker
