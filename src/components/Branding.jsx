import React from 'react'
import logo1 from '../images/Company Logo.png'
import logo2 from '../images/Clip path group.png'
import logo3 from '../images/Clip path group 2.png'
import logo4 from '../images/Company Logo 3.png'
import logo5 from '../images/Company Logo 4.png'
import logo6 from '../images/Company Logo 5.png'
import logo7 from '../images/Company Logo 6.png'
import logo8 from '../images/Company Logo 7.png'
import logo9 from '../images/Company Logo 8.png'
import logo10 from '../images/Company Logo 9.png'
import logo11 from '../images/Company Logo 10.png'
const Branding = () => {
    
    const allBrand = {
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo11
    }

  return (
    <div>
         <div className={'h-[352px] flex flex-col max-w-[1216px] mt-[64px] mx-auto items-center justify-center'}>
                <div className={'md:flex flex-wrap grid grid-cols-3 mx-8 justify-center items-center gap-[28px]'}>
                    <img src={allBrand.logo1} alt=""/>
                    <img src={allBrand.logo2} alt=""/>
                    <img src={allBrand.logo3} alt=""/>
                    <img src={allBrand.logo4} alt=""/>
                    <img src={allBrand.logo5} alt=""/>
                    <img src={allBrand.logo6} alt=""/>

                </div>
                <div className={'md:max-w-[976px] grid grid-cols-3 mx-8  md:flex justify-center items-center'}>
                    <img src={allBrand.logo6} alt=""/>
                    <img src={allBrand.logo7} alt=""/>
                    <img src={allBrand.logo8} alt=""/>
                    <img src={allBrand.logo9} alt=""/>
                    <img src={allBrand.logo10} alt=""/>
                    <img src={allBrand.logo11} alt=""/>
                </div>
            </div>
    </div>
  )
}

export default Branding
