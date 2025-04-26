import React from 'react'

const DetailsCard = ({details}) => {
  const{logo,country,address}=details
  return (
    <div className={'max-w-[1216px] mb-[16px] mx-auto'}>
         <div className={'border-[#E2E8F0] border-1  p-[20px] rounded-xl justify-start m-3 hover:scale-110 transition-all ease-in-out duration-150'}>
                     <div>
                         <img src={logo} alt=""/>
                         <h1 className={'mt-[24px] text-[18px] text-[#1E293B] font-extrabold pb-[24px]'}>{country}</h1>
                         <p className=' md:w-3/4 w-[150px] text-[#1E293B]'>{address}</p>
                     </div>    
            </div>
            
    </div>
  )
}

export default DetailsCard
