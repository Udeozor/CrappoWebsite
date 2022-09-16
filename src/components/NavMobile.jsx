import React from 'react'
import { CgClose } from 'react-icons/cg';
import { navData } from "../data";

const NavMobile = ({setNavMobile}) => {
  return (
      <nav className='lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center'>
          {/* close btn */}
          <div onClick={() => setNavMobile(false)} className='absolute top-2 right-2 cursor-pointer'>
              <CgClose className='text-2xl'/>
          </div>

          {/*navlist*/}

          <ul className='text-xl flex flex-col gap-y-8'>
              {navData.map((item, index) => {
                  return (
                      <li>
                          <a href={item.href}>{item.name}</a>
                      </li>
                  )
              })}
          </ul>


          
      
    </nav>
  )
}

export default NavMobile
