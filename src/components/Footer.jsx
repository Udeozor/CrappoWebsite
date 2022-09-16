import React from "react";
import Logo from '../images/logo.svg'
import Visa from '../images/visa.png'
import Mastercard from '../images/mastercard.png'
import Bitcoin from '../images/bitcoin.png'
import {IoLogoTwitter, IoLogoYoutube, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin} from 'react-icons/io'


const Footer = () => {
  return(
  <footer className="lg:pt-24 pt-0">
    <div className="container mx-auto lg:mb-24">
      <div className="flex flex-col gap-12 lg:flex-row">
        {/* logo */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <a href="#logo"><img src={Logo} alt="" /></a>
          </div>
        {/* link group */}
          <div className="flex flex-1 flex-col gap-16 lg:flex-row ">
            {/* link 1 */}
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Quick Links</div>
              <ul className="space-y-4 text-gray">
                <li><a className="hover:text-blue transition" href="#home">Home</a></li>
                <li><a className="hover:text-blue transition" href="#products">Products</a></li>
                <li><a className="hover:text-blue transition" href="#about">About</a></li>
                <li><a className="hover:text-blue transition" href="#f">Features</a></li>
                <li><a className="hover:text-blue transition" href="#contact">Contact</a></li>
              </ul>
            </div>
            {/* link 2 */}
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Resources</div>
              <ul className="space-y-4 text-gray">
                <li><a className="hover:text-blue transition" href="#home">Download whitepaper</a></li>
                <li><a className="hover:text-blue transition" href="#products">Smart token</a></li>
                <li><a className="hover:text-blue transition" href="#about">Blockchain Explorer</a></li>
                <li><a className="hover:text-blue transition" href="#f">Crypto API</a></li>
                <li><a className="hover:text-blue transition" href="#contact">Interest</a></li>
              </ul>
          </div>
        </div>
        {/* Payment */}
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="h3 font-medium text-center mb-10 lg:text-left">We accept following payment systems</h3>
              <div className="flex justify-center items-center gap-6">
                <img src={Visa} alt="" />
                <img src={Mastercard} alt="" />
                <img src={Bitcoin} alt="" />
              </div>
            </div>
        </div>
      </div>
    </div>
      {/* Copyright & Socials */}
      <div className="py-12 ">
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          <div>
            ©2021 CRAPPO. All rights reserved
          </div>
          {/*social icons*/}
          <div className="flex text-2xl gap-x-8">
            <a className="hover:text-blue transitiom" href="#y"><IoLogoYoutube/> </a>
            <a className="hover:text-blue transitiom" href="#y"><IoLogoTwitter/> </a>
            <a className="hover:text-blue transitiom" href="#y"><IoLogoFacebook/> </a>
            <a className="hover:text-blue transitiom" href="#y"><IoLogoInstagram/> </a>
            <a className="hover:text-blue transitiom" href="#y"><IoLogoLinkedin/> </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
