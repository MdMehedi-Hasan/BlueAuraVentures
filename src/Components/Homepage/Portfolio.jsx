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
        { company: 'SpaceX', image: p1, link:'https://www.spacex.com/' },
        { company: 'ripple', image: p11, link:'https://www.ripplefoods.com/' },
        { company: 'giblib', image: p4, link:'https://www.giblib.com/' },
        { company: 'iyris', image: p6, link:'https://www.redseafarms.com/' },
        { company: 'seafoodsouq', image: p12, link:'https://www.seafoodsouq.com/' },
        { company: 'Pathao', image: p9, link:'https://pathao.com/' },
        { company: 'chaldal', image: p3, link:' https://chaldal.com/' },
        { company: 'Interactive-cares', image: p5, link:'https://interactivecares.com/' },
        { company: 'priyoshop', image: p10, link:' https://priyoshopretail.com/' },
        { company: 'agroshift', image: p7, link:' https://agroshift.com/' },
        { company: 'Onnow', image: p8, link:'https://www.onnow.io/' },
        { company: 'Zantrik', image: p14, link:' https://www.zantrik.com/' },
        { company: 'abhi', image: p2, link:'https://abhi.com.pk/' },
        { company: 'soptle', image: p13, link:' https://www.soptle.com/' },
    ]
    return (
        <div className='mb-20 px-3 md:px-0'>
            <h1 className='text-center mt-20 font-bold text-xl sm:text-2xl md:text-4xl text-[#0096c7] mb-3' id="portfolio">Portfolio Companies</h1>
            {/* <p className='text-center mb-8 text-gray-600'>Prominent brands in which we have made investments</p> */}
            <div className='flex flex-wrap gap-10 justify-center items-center max-w-2xl mx-auto'>{/* grid grid-cols-5 */}
                {images?.map((image, index) => <a href={image?.link} key={index}><img src={image?.image} className='w-24'/></a>)}
            </div>
        </div>
    )
}
