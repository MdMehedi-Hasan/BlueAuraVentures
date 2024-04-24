import image1 from '../../assets/Others/invest.jpg'
import image2 from '../../assets/Others/startup.jpg'

export default function details() {
    return (
        <div className='pt-10 pb-20'>
            <h1 className='font-bold text-4xl text-[#0096c7] text-center mb-8'>Our Believes</h1>
            <ul className='max-w-5xl mx-auto'>
                <li className='flex items-center gap-8 bg-gray-100 rounded'>
                    <img src={image1} alt="" className='w-96 rounded-l'/>
                    <p className='text-xl text-[#0096c7] pr-5'> We seek to invest in startups addressing local problems head on, beyond the MVP
                        stage with clear product-market fit, traction and path to scalability.
                    </p>
                </li>
                <li className='flex items-center gap-8 bg-gray-100 rounded mt-10'>
                    <img src={image2} alt="" className='w-96 rounded-l'/>
                    <p className='text-xl text-[#0096c7] pr-5'>The macro and micro matter. As such, we seek to invest in startups that can identify
                        opportunities led by macrotrends and digitization, while actively exploiting local
                        business opportunities with a focus on growth.
                    </p>
                </li>
            </ul>
        </div>
    )
}
