import { useState } from 'react'
import headerImg from '../../assets/mountain.jpg'
import './CSS/Header.css'
export default function Header() {
    const [fixedNav,setFixedNav] = useState(false)
    const bgStyle = {
        backgroundImage: `url(${headerImg})`,
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const changeNavColor = () => {
        if (window.scrollY >= 200 && window.scrollY < 500) {
            setFixedNav(null)
        }
        else if (window.scrollY >= 500) {
            setFixedNav(true)
        }
        else {
            setFixedNav(false)
        }
    }
    window.addEventListener("scroll", changeNavColor)
    return (
        <div id="home">
            <div style={bgStyle}>
                <div className='h-[500px] bg-[#62626278]'>
                    <div className={`translate-y-0 duration-300 ${fixedNav === null && '-translate-y-10'} ${fixedNav && 'fixed top-0 w-full bg-[#0096c7e3]'}`}>{/* className='fixed top-0 w-full bg-[#0096c7]' */}
                        <nav className='flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto py-3 px-3 lg:px-0'>
                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTH92jJHk_n3GSKPf4UvHEp776ncUnrqCx4dK6_tIU3A&s" alt="logo" className='w-16 rounded-full' /> */}
                            <a href="#home"><h1 className={`leading-none text-xl sm:text-2xl mt-3 sm:mt-0 ${fixedNav && 'text-white'}`}><span className={`${fixedNav ? 'text-white' : 'text-sky-600'} font-bold`}>BlueAura</span><br /><span className='gruppo-regular'>Ventures</span></h1></a>
                            <ul className='text-white hidden sm:flex items-center gap-5 font-semibold'>
                                <li className='border-b-2 border-white px-4 py-1'><a href="#home">Home</a></li>
                                <li className='border-b-2 border-white px-4 py-1'><a href="#about">About</a></li>
                                <li className='border-b-2 border-white px-4 py-1'><a href="#portfolio">Companies</a></li>
                            </ul>
                        </nav>
                    </div>
                    <p className='w-10/12 sm:w-8/12 max-w-5xl mx-auto text-center font-bold text-2xl text-gray-50 flex-0 pt-24 sm:pt-36'>BlueAuraVentures invests in growth-stage,
                        technology-focused founders via direct investments
                        and fund investments backed by limited partners
                        (LPs) from around the world.
                    </p>
                </div>
            </div>
        </div>
    )
}
