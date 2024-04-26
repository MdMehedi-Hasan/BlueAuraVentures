import p1 from '../../assets/Portfolio/SpaceX_logo_black.svg.webp'
import p2 from '../../assets/Portfolio/abhi.webp'
import p3 from '../../assets/Portfolio/chaldal.webp'
import p4 from '../../assets/Portfolio/giblib.webp'
import p5 from '../../assets/Portfolio/ic-logo.webp'
import p6 from '../../assets/Portfolio/iyris-logo-vector.svg'
import p7 from '../../assets/Portfolio/agroshift.svg'
import p8 from '../../assets/Portfolio/onnow.webp'
import p9 from '../../assets/Portfolio/Pathao_Logo-.svg'
import p10 from '../../assets/Portfolio/priyoshop-logo-transparent-bg-for-white-bg-1.webp'
import p11 from '../../assets/Portfolio/ripple-logo.webp'
import p12 from '../../assets/Portfolio/seafoodsouq.webp'
import p13 from '../../assets/Portfolio/soptle.webp'
import p14 from '../../assets/Portfolio/Zantrik-Logo.webp'
export default function Portfolio() {
    const images = [
        { company: 'SpaceX', image: p1 },
        { company: 'ripple', image: p11 },
        { company: 'giblib', image: p4 },
        { company: 'iyris', image: p6 },
        { company: 'seafoodsouq', image: p12 },
        { company: 'Pathao', image: p9 },
        { company: 'chaldal', image: p3 },
        { company: 'Interactive-cares', image: p5 },
        { company: 'priyoshop', image: p10 },
        { company: 'agroshift', image: p7 },
        { company: 'Onnow', image: p8 },
        { company: 'Zantrik', image: p14 },
        { company: 'abhi', image: p2 },
        { company: 'soptle', image: p13 },
    ]
    return (
        <div className='mb-20 px-3 md:px-0'>
            <h1 className='text-center mt-20 font-bold text-xl sm:text-2xl md:text-4xl text-[#0096c7] mb-3' id="portfolio">Portfolio Companies</h1>
            {/* <p className='text-center mb-8 text-gray-600'>Prominent brands in which we have made investments</p> */}
            <div className='flex flex-wrap gap-10 justify-center items-center max-w-2xl mx-auto'>{/* grid grid-cols-5 */}
                {images?.map((image, index) => <img key={index} src={image?.image} className='w-24'/>)}
            </div>
        </div>
    )
}
