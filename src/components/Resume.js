import ResumeImg from '../assets/resume.png'; // Image of the resume
import ResumeImg1 from '../assets/Resume.pdf.png'; 
import ResumePDF from '../assets/Resume.pdf.pdf'; // PDF file

export default function Resume() {
    return (
        <section className='flex flex-col md:flex-row bg-secondary px-10 md:px-20 lg:px-40' id='resume'>
            <div className='py-10 md:w-1/2 flex justify-center md:justify-end'>
                <img 
                    className='w-[600px] md:w-[800px] lg:w-[1000px] h-auto' 
                    src={ResumeImg} 
                    alt="Resume" 
                />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl md:text-5xl lg:text-5xl border-b-4 border-primary mb-5 w-[180px] font-bold'>Resume</h1>
                    <p className='pb-5 text-lg md:text-xl lg:text-2xl'>
                        You can view my resume 
                        <a 
                            className='btn ml-2' 
                            href={ResumePDF} 
                            download='Arumugam_Resume.pdf' // Optional: specify the name of the file when downloading
                        >
                            Download
                        </a>
                        <a 
                            className='btn ml-2 bg-secondary hover:bg-secondary-dark' 
                            href={ResumeImg1} 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                            View
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
