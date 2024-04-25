import image1 from '../../assets/Others/invest.jpg'
import image2 from '../../assets/Others/startup.jpg'

export default function details() {
    return (
        <div className='pt-10 pb-20 px-3 md:px-5 lg:px-0'>
            <h1 className='font-bold text-xl sm:text-2xl md:text-4xl text-[#0096c7] text-center mb-8'>Our Believes</h1>
            <ul className='max-w-5xl mx-auto'>
                <li className='flex flex-col md:flex-row items-center gap-8 bg-gray-100 rounded'>
                    <img src={image1} alt="" className='md:w-96 md:rounded-l rounded-t'/>
                    <p className='text-xl text-[#0096c7] md:pr-5 p-3 md:p-3 pb-5 md:pb-0'> We seek to invest in startups addressing local problems head on, beyond the MVP
                        stage with clear product-market fit, traction and path to scalability.
                    </p>
                </li>
                <li className='flex flex-col md:flex-row items-center gap-8 bg-gray-100 rounded mt-10'>
                    <img src={image2} alt="" className='md:w-96 md:rounded-l rounded-t'/>
                    <p className='text-xl text-[#0096c7] md:pr-5 p-3 md:p-3 pb-5 md:pb-0'>The macro and micro matter. As such, we seek to invest in startups that can identify
                        opportunities led by macrotrends and digitization, while actively exploiting local
                        business opportunities with a focus on growth.
                    </p>
                </li>
            </ul>
        </div>
    )
}
