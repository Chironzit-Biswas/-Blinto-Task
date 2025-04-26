import React from 'react'

const Card = ({card}) => {
    const {title,description,image}=card
  return (
    <div>
         <div className={'w-[314px] h-[214px] flex flex-col justify-center items-center mx-5'}>
                <div className={'h-[80px] w-[80px] mt-10 '}>
                    <img className={' h-full w-full '} src={image} alt=""/>
                </div>
                <h1 className={'text-[20px] font-bold mt-[20px] mb-[8px]'}>{title}</h1>
                <p className={'text-[16px] font-normal'}>{description}</p>
            </div>
    </div>
  )
}

export default Card
