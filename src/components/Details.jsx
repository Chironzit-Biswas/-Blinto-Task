
import DetailsCard from './DetailsCard';
import FAQ from './FAQ';
import logo1 from '../images/MapPin.png'

function Details  () {

    const address=[
        {
            "id": 1,
            "logo":logo1,
            "country": "Japan",
            "address": "221b Banzai Street Tokyo, TO  77812"
        },
        {
            "id": 2,
            "logo":logo1,
            "country": "USA",
            "address": "221b Freedom Street New York, NY 21231"
        },
        {
            "id": 3,
            "logo":logo1,
            "country": "Canada",
            "address": "221b Maple Syrup Street Ottawa, OW 77847"
        },
        {
            "id": 4,
            "logo":logo1,
            "country": "South Korea",
            "address": "221b Samyang Street Gangnam, GM 22124"
        }
    ]


  return (
    <div className={'max-w-[1216px] h-[48px] mx-5 md:mx-auto'}>
         <div className={'flex flex-col justify-center items-start mx-8'}>
                    <p className={'text-[#4F46E5] text-[14px] mt-[96px] font-semibold bg-[#EEF2FF] py-[6px] px-[12px] rounded-full'}>Visit
                        Us Anytime</p>
                    <h1 className={'text-[36px] t font-extrabold text-[#1E293B]  mt-[24px] md:w-2/3 leading-[44px]'}>Our
                        Office</h1>
                    <p className={'text-[18px] font-normal md:w-full w-[320px] text-[#475569] mt-[24px]  mb-[64px]'}>You can visit our
                        office
                        anytime but please don’t stalk us or don’t be creepy.</p>
                </div>
                <div className=' md:flex justify-center items-center mx-auto'>
                    {
                        address.map(details => <DetailsCard key={details.id} details={details}></DetailsCard>)
                    }
                </div>
                <div>
                    <FAQ/>
                </div>
    </div>
  )
}

export default Details
