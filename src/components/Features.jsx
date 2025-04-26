import React from 'react'
import icon1 from '../images/Lightning.png'
import icon2 from '../images/GearSix.png'
import icon3 from '../images/Broom.png'
import icon4 from '../images/ChartLine.png'
import icon5 from '../images/BowlFood.png'
import icon6 from '../images/SmileyWink.png'
import Card from './Card'

const Features = () => {

    const cards =[
        {id:'1',title:'Lazy Efficient',
            description:'A cras semper auctor neque. Proin libero nunc consequat interdum varius sit. Libero volutpat sed cras ornare arcu dui vivamus arcu felis.',
            image:icon1},

        {id:'2',
            title:'Streamlined Process',
            description:'Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Orci porta non pulvinar neque laoreet.',
            image:icon2},

        {id:'3',
            title:'Minimum Effort',
            description:'Tincidunt eget nullam non nisi est sit amet facilisis magna. Rhoncus dolor purus non enim praesent elementum.',
            image:icon3},

        {id:'4',
            title:'Absolutely Easy To Use',
            description:'Rutrum quisque non tellus orci ac. Purus viverra accumsan in nisl. Id interdum velit laoreet id donec ultrices adisipicing elit.',
            image:icon4},

        {id:'5',
            title:'Just Sleep & Chill',
            description:'Bibendum est ultricies integer quis auctor elit. Ultrices in iaculis nunc sed. A scelerisque purus semper eget. Facilisi morbi tempus iaculi.',
            image:icon5},

        {id:'6',
            title:'Don’t Worry About Life',
            description:'Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Risus ultricies tristique nulla aliquet enim tortor.',
            image:icon6},
    ]

  return (
    <div id='features'>
         <div className={'max-w-[1216px] mx-auto'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <p className={'text-[#4F46E5] text-[14px] mt-[96px] font-semibold bg-[#EEF2FF] py-[6px] px-[12px] rounded-full'}>Our Main Features</p>
                    <h1 className={'text-[60px] font-extrabold text-[#1E293B] text-center mt-[24px] md:w-2/3 leading-[68px]'}>Our Primary Features</h1>
                    <p className={'text-[18px] font-normal text-[#475569] mt-[24px] w-2/3 text-center mb-[64px]'}>Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi. Nisi porta lorem mollis aliquam ut porttitor leo.</p>
                </div>
                <div className={'flex flex-wrap justify-center items-center gap-[64px] mb-[96px]'}>
                {
                        cards.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>
            </div>
    </div>
  )
}

export default Features
