import AboutImg from '../assets/about.png';

export default function About() {

    const config = {
        line1: 'Hi, Im Arumugam, a developer skilled in MERN stack (React.js, MongoDB), data analytics (Power BI), and SQL database management. I build dynamic web applications, derive insights from data, and design efficient databases. My work focuses on innovation, problem-solving, and delivering high-quality results.'
    } 
    return (
        <section className='flex flex-col md:flex-row bg-secondary  px-5' id='about'>
            <div className='w-1/2 py-5'>
                <img src={AboutImg} alt="About me" />
            </div>
            <div className='w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center'>

                    <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                </div>
            </div>
        </section>
    );
}
