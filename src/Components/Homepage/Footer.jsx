import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className="bg-[#0096c7] text-white py-5">
            <div className="max-w-5xl mx-auto flex justify-between">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                </ul>
                <div className="w-5/12">
                    <p className="text-xl">Please reach out to us if you want to be a part of the journey as a founder or investor.</p>
                    <div className='flex gap-4 text-3xl mt-3'>
                        <FaFacebook />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            <p className="text-center border-t-2 border-gray-200 max-w-5xl mx-auto pt-1 mt-3">All Right Reserved</p>
        </div>
    )
}
