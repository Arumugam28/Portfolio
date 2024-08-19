import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'I\'m a MERN-Stack developer and Data Analyst',
        social : {
            twitter :'https://x.com/ArumugaJai',
            github :'https://github.com/Arumugam28',
            linkedin : 'https://www.linkedin.com/in/arumugam-b-760090255/'
        }
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-4xl mb-4'>Hi, <br /> I'm Arumugam</h1>
                <p className='text-2xl text-white'>{config.subtitle}</p>
                <div className='flex py-5'>
                    <a 
                        href={config.social.twitter}
                        className='pr-5 hover:text-white' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <AiOutlineTwitter size={30} />
                    </a>
                    <a 
                        href={config.social.github}
                        className='pr-5 hover:text-white' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <AiOutlineGithub size={30} />
                    </a>
                    <a 
                        href={config.social.linkedin}
                        className='hover:text-white' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <AiOutlineLinkedin size={30} />
                    </a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt="Hero" />
        </section>
    );
}
