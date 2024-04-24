import headerImg from '../../assets/mountain.jpg'
export default function Header() {
    const bgStyle = {
        backgroundImage: `url(${headerImg})`,
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div>
            <div style={bgStyle}>
                <div className='h-[500px] bg-[#62626278] flex flex-col'>
                    <nav className='flex-0 flex items-center justify-between'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTH92jJHk_n3GSKPf4UvHEp776ncUnrqCx4dK6_tIU3A&s" alt="" className='w-16 rounded-full' />
                        <ul className='text-white flex items-center gap-5 font-semibold'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                        </ul>
                    </nav>
                    <p className='w-8/12 mx-auto text-center font-bold text-2xl text-gray-50 my-auto flex-0'>BlueAuraVentures invests in growth-stage,
                        technology-focused founders via direct investments
                        and fund investments backed by limited partners
                        (LPs) from around the world
                    </p>
                </div>
            </div>
        </div>
    )
}
