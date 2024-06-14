import HeroImg from '../Asests/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin} from "react-icons/ai";

export default function Hero() {
    const config = {
        social : {
            facebook : 'https://www.facebook.com/' ,
            Linkedin : 'https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit',
            Twitter :  'https://twitter.com/i/flow/single_sign_on'
        
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
        <h1 className='w-1/2 text-white text-6xl font-hero-font'>Hi,<br/> Im <span className='text-black'>Bharath</span>
             <p className='text-2xl'>Im a Web Developer</p>
        </h1>
        <div className='flex py-10 '>
            <a href={config.social.Twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
            <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
            <a href={config.social.Linkedin} className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
        </div>
    </div>
        
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
    
}