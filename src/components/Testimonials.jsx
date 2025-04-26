// import React, { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard';
import Details from './Details';
import FAQ from './FAQ';
import rating1 from '../images/Rating1.png'


const Testimonials = () => {

    const reviewData =[

        {
            "id": 1,
            "rating": rating1,
            "des": "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.",
            "img": "src/images/Avatar1.png",
            "title": "X_AE_A-13",
            "profile_des": "Product Designer, slothUI"

        },
        {
            "id": 2,
            "rating": "src/images/Rating2.png",
            "des": "Posuere urna nec tincidunt praesent semper feugiat nibh sed. Velit dignissim sodales ut eu.",
            "img": "src/images/Avatar2.png",
            "title": "Azunyan U. Wu",
            "profile_des": "CEO, nextlife.ai"

        },
        {
            "id": 3,
            "rating": "src/images/Rating3.png",
            "des": "Sit amet est placerat in. Blandit cursus risus at ultrices mi tempus imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi. ",
            "img": "src/images/Avatar3.png",
            "title": "Mechatronics Yi",
            "profile_des": "CTO, fin4win.ai"

        },
        {
            "id": 4,
            "rating": "src/images/Rating4.png",
            "des": "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo. Arcu non odio euismod lacinia at quis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.",
            "img": "src/images/Avatar4.png",
            "title": "Oarack Babama",
            "profile_des": "Former President of US"

        },
        {
            "id": 5,
            "rating": "src/images/Rating5.png",
            "des": "Accumsan tortor posuere ac ut consequat. Quis varius quam quisque id diam vel. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel pharetra vel turpis nunc eget.",
            "img": "src/images/Avatar5.png",
            "title": "Saylor Twift",
            "profile_des": "Famous Singer"

        },
        {
            "id": 6,
            "rating": "src/images/Rating6.png",
            "des": "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi. ",
            "img": "src/images/Avatar6.png",
            "title": "Asuna Yuuki",
            "profile_des": "Virtual Swordsman"

        },
        {
            "id": 7,
            "rating": "src/images/Rating7.png",
            "des": "Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna et pharetra pharetra massa.",
            "img": "src/images/Avatar7.png",
            "title": "Boe Jiden",
            "profile_des": "Former President Of Canada"

        },
        {
            "id": 8,
            "rating": "src/images/Rating8.png",
            "des": "Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Nec nam aliquam sem et tortor consequat id porta nibh. Viverra suspendisse. Lacus sed viverra tellus in hac habitasse platea dictumst. Elit at imperdiet dui accumsan.",
            "img": "src/images/Avatar8.png",
            "title": "Vermillion D. Gray",
            "profile_des": "CEO, hacklife.ai"

        },
        {
            "id": 9,
            "rating": "src/images/Rating9.png",
            "des": "Viverra accumsan in nisl nisi scelerisque eu. Vitae congue eu consequat ac felis donec.",
            "img": "src/images/Avatar9.png",
            "title": "Zuckman Wu",
            "profile_des": "CEO, tech4life.ai"

        }

    ]

    // const [showReviews, setShowReviews] = useState([])
    //
    // useEffect(() => {
    //     fetch('./ReviewData.json')
    //         .then(res => res.json())
    //         .then(data => setShowReviews(data))
    // }, []);

  return (
    <div id='testimonials'>
         <div className={'max-w-[1216px] h-[48px] mx-5 md:mx-auto'}>
                <div className={'flex flex-col justify-center items-center mx-8'}>
                    <p className={'text-[#4F46E5] text-[14px] mt-[96px] font-semibold bg-[#EEF2FF] py-[6px] px-[12px] rounded-full'}>Testimonials</p>
                    <h1 className={'md:text-[36px] text-[30px] text-center font-extrabold text-[#1E293B]  mt-[24px] md:w-2/3 leading-[44px]'}>What People Say</h1>
                    <p className={'md:text-[18px] text-[16px] font-normal md:w-full w-[300px] text-center text-[#475569] mt-[24px]  mb-[64px]'}>You can visit our office anytime but please don’t stalk us or don’t be creepy.</p>
                </div>

                <div className={'md:grid lg:grid-cols-3 md:grid-cols-2 md:mx-auto py-[50px]'}>
                    {
                        reviewData.map(card =>  <TestimonialCard card={card}></TestimonialCard>)
                    }
                </div>
               <div >
                  <Details/>
               </div>
            </div> 
    </div>
  )
}

export default Testimonials
