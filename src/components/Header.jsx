import React from 'react'
import Logo from '../images/logo.svg';
import Navbar from './Navbar';
import AccountBtns from './AccountBtns';
import {CgMenuRight} from 'react-icons/cg'

const Header = ({setNavMobile}) => {
  return (
      <header
              className='py-[30px] lg:pt-[60px]'
              data-aos='fade-down'
              data-aos-delay='500'
              data-aos-duration='2000'>
          

          <div className="container mx-auto flex items-center justify-between">
              <a href='#Logo'>
                  <img src={Logo} alt=""  />
              </a>

              {/* nav & btns */}
              <div className='hidden lg:flex gap-x-[55px]'>
                  <Navbar /> 
                  <AccountBtns/>
              </div>

              {/* open nav btns */}
              <div onClick={() => setNavMobile(true)} className='lg:hidden cursor-pointer'>
                  <CgMenuRight className='text-2xl'/>
              </div>
          </div>
      
    </header>
  )
}

export default Header
