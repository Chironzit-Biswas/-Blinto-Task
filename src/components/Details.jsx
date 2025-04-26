import React, { useEffect, useState } from 'react'
import DetailsCard from './DetailsCard';
import FAQ from './FAQ';

function Details  () {

    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch('./Address.json')
            .then(res => res.json())
            .then(data => setList(data))
    },[])

  return (
    <div className={'max-w-[1216px] h-[48px] mx-auto'}>
         <div className={'flex flex-col justify-center items-start mx-8'}>
                    <p className={'text-[#4F46E5] text-[14px] mt-[96px] font-semibold bg-[#EEF2FF] py-[6px] px-[12px] rounded-full'}>Visit
                        Us Anytime</p>
                    <h1 className={'text-[36px] t font-extrabold text-[#1E293B]  mt-[24px] md:w-2/3 leading-[44px]'}>Our
                        Office</h1>
                    <p className={'text-[18px] font-normal  text-[#475569] mt-[24px]  mb-[64px]'}>You can visit our
                        office
                        anytime but please don’t stalk us or don’t be creepy.</p>
                </div>
                <div className=' md:flex justify-center items-center mx-auto'>
                    {
                        list.map(details => <DetailsCard key={details.id} details={details}></DetailsCard>)
                    }
                </div>
                <div>
                    <FAQ/>
                </div>
    </div>
  )
}

export default Details
