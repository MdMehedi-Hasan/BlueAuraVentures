import contactImg from '../../assets/Others/contact.jpg'
export default function Contact() {
    return (
        <div className='max-w-5xl grid grid-cols-6 items-center mx-auto gap-16 my-36 px-3 md:px-5 lg:px-0'>
            <img src={contactImg} alt="contact" className='col-span-6 md:col-span-3 rounded'/>
            <p className='col-span-6 md:col-span-3 text-4xl text-center md:text-start'>Please reach out to us if you want to be a part of the journey as a founder or investor.</p>
        </div>
    )
}
