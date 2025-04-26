import React from 'react'
import RightSideImg from '../images/Frame 2.png'

const FeatureTwo = () => {
  return (
    <div>
         <div className={'max-w-[1216px] mx-auto py-[30px]'}>
            <div>
                <div className={'flex flex-col justify-start items-start mx-8'}>
                    <p className={'text-[#4F46E5] text-[14px] mt-[96px] font-semibold bg-[#EEF2FF] py-[6px] px-[12px] rounded-full'}>Who is it for?</p>
                    <h1 className={'text-[36px] font-extrabold text-[#1E293B]  mt-[24px] md:w-2/3 leading-[44px]'}>What the procrastinators say</h1>
                    <p className={'text-[18px] font-normal text-[#475569] mt-[24px] md:w-1/2  mb-[64px]'}>Mi ipsum faucibus vitae aliquet nec. At tempor commodo ullamcorper a lacus. Bibendum at varius vel pharetra vel.</p>
                </div>

                <div className={'md:flex justify-center items-center'}>
                    <div className={' justify-start items-start mb-4 mx-8  px-[28px]'}>
                        <div className={'border-l-2 border-[#E0E7FF] hover:border-[#4F46E5] mb-4 px-5'}>
                            <h1 className={'text-[20px] font-extrabold text-[#475569]  mb-[12px] leading-[44px]'}>Convallis
                                tellus id interdum velit</h1>
                            <p className={'text-[18px]  font-normal text-[#475569] '}>Mi ipsum
                                faucibus vitae aliquet nec. At tempor commodo ullamcorper a lacus. Bibendum at varius
                                vel
                                pharetra vel.</p>
                        </div>

                        <div className={'border-l-2 border-[#E0E7FF] hover:border-[#4F46E5] mb-4 px-5'}>
                            <h1 className={'text-[20px] font-extrabold text-[#475569]  mb-[12px] leading-[44px]'}>Convallis
                                tellus id interdum velit</h1>
                            <p className={'text-[18px]  font-normal text-[#475569] '}>Mi ipsum
                                faucibus vitae aliquet nec. At tempor commodo ullamcorper a lacus. Bibendum at varius
                                vel
                                pharetra vel.</p>
                        </div>

                        <div className={'border-l-2 border-[#E0E7FF] hover:border-[#4F46E5] mb-4 px-5'}>
                            <h1 className={'text-[20px] font-extrabold text-[#475569]  mb-[12px] leading-[44px]'}>Convallis
                                tellus id interdum velit</h1>
                            <p className={'text-[18px]  font-normal text-[#475569] '}>Mi ipsum
                                faucibus vitae aliquet nec. At tempor commodo ullamcorper a lacus. Bibendum at varius
                                vel
                                pharetra vel.</p>
                        </div>
                    </div>


                    <div className={'md:h-full md:w-full p-5 '}>
                        <img src={RightSideImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureTwo
