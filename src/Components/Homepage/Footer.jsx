// import { FaFacebook, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className="bg-[#0096c7] text-white pt-8 pb-5">
            <div className="max-w-5xl md:px-3 lg:px-0 mx-auto flex flex-col md:flex-row justify-between">
                <ul className='flex flex-col items-center md:items-start gap-2'>
                    <li className='font-semibold'><a href="#home">Home</a></li>
                    <li className='font-semibold'><a href="#about">About</a></li>
                    <li className='font-semibold'><a href="#portfolio">Portfolio</a></li>
                </ul>
                <div className="md:w-5/12">
                    <p className="px-2 md:px-0 mt-5 md:mt-0 text-xl md:text-2xl text-center md:text-start">Please reach out to us if you want to be a part of the journey as a founder or investor.</p>
                    {/* <div className='flex gap-4 text-2xl mt-5'>
                        <FaFacebook />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div> */}
                </div>
            </div>
            <p className="text-center border-t-2 border-gray-200 max-w-5xl mx-auto pt-3 mt-8">All Right Reserved by @BlueAuraVentures</p>
        </div>
    )
}
