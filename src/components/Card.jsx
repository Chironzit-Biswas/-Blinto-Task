import React from 'react'

const Card = ({card}) => {
    const {title,description,image}=card
  return (
    <div>
         <div className={'w-[384px] h-[214px] flex flex-col justify-center items-center '}>
                <div className={'h-[80px] w-[80px] mt-10 '}>
                    <img className={' h-full w-full '} src={image} alt=""/>
                </div>
                <h1 className={'md:text-[20px] text-[18px] font-bold mt-[20px] mb-[8px]'}>{title}</h1>
                <p className={'text-[16px] text-[#475569] text-center font-normal'}>{description}</p>
            </div>
    </div>
  )
}

export default Card
