import React from 'react'

const TestimonialCard = ({card}) => {
    const {rating,des,img,title,profile_des}=card
  return (
    <div >
        <div className={'border-[#E2E8F0] border-1 bg-[#F8FAFC] p-[24px] mx-auto rounded-xl h-auto w-[384px] flex flex-col justify-start m-3 hover:scale-110 transition-all ease-in-out duration-150'}>
                     <div>
                         <img src={rating} alt=""/>
                         <h1 className={'mt-[24px] text-[18px] text-[#475569] leading-[160%]'}>{des}</h1>
                     </div>
                    <div className={'flex mt-[24px]'}>
                        <img className={'h-[48px] w-[48px]'} src={img} alt=""/>
                         <div className={'ml-4'}>
                             <h1 className={'font-medium'}>{title}</h1>
                             <p className={'text-[16px] text-[#475569]'}>{profile_des}</p>
                         </div>
                    </div>
                    
            </div>
            
    </div>
  )
}

export default TestimonialCard
