import pillar1 from '../../assets/pillars/project-management.png'
import pillar2 from '../../assets/pillars/runner.png'
import pillar3 from '../../assets/pillars/think-outside-the-box.png'
import pillar4 from '../../assets/pillars/fund.png'

export default function Pillars() {
    return (
        <div className='pt-20 pb-28 px-3 md:px-0'>
            {/* <h1 className='text-center font-bold text-xl sm:text-2xl md:text-4xl text-[#0096c7] mb-3' id="about">Key Pillars</h1> */}
            <p className='text-center mb-10 text-[#0096c7] text-xl sm:text-2xl md:text-3xl' id="about">These are the key pillars <br /> that define our investment ethos and approach</p>
            <ul className='flex flex-wrap justify-center gap-10'>
                <li className='flex flex-col items-center'>
                    <div className='bg-[#0096c7] rounded-full p-6 w-fit mb-2'>
                        <img src={pillar1} alt="" className='w-20' />
                    </div>
                    <span className='text-gray-500 font-semibold'>Tech focus + Value creation</span></li>
                <li className='flex flex-col items-center'>
                    <div className='bg-[#0096c7] rounded-full p-6 w-fit mb-2'>
                        <img src={pillar2} alt="" className='w-20' />
                    </div>
                    <span className='text-gray-500 font-semibold'>Impatient enthusiasm</span>
                </li>
                <li className='flex flex-col items-center'>
                    <div className='bg-[#0096c7] rounded-full p-6 w-fit mb-2'>
                        <img src={pillar3} alt="" className='w-20' />
                    </div>
                    <span className='text-gray-500 font-semibold'>Leapfrog market acceptance</span>
                </li>
                <li className='flex flex-col items-center'>
                    <div className='bg-[#0096c7] rounded-full p-6 w-fit mb-2'>
                        <img src={pillar4} alt="" className='w-20' />
                    </div>
                    <span className='text-gray-500 font-semibold'>Patient capital</span>
                </li>
            </ul>
        </div>
    )
}
