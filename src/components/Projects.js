import websiteImg from '../assets/e-learner.png';
import websiteImg1 from '../assets/e-learner1.png';
import websiteImg2 from '../assets/e-learner2png.png';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg,
                description: 'This project is an English Lab management system for colleges. Faculty can upload tests, monitor student progress, and evaluate performance. Students can take tests and track their progress. The project is built using the MERN Stack, providing a seamless interface for both faculty and students.',
                link: 'https://github.com/Arumugam28/E-Learner'
            },
            {
                image: websiteImg1,
                description: 'An advanced version of the English Lab website that incorporates AI-driven analytics to provide deeper insights into student performance. Faculty can create customized tests, and the system automatically adjusts difficulty based on student progress. The project leverages MERN Stack with additional AI capabilities.',
                link: 'https://github.com/Arumugam28/E-Learner'
            },
            {
                image: websiteImg2,
                description: 'This version of the College English Lab introduces a mobile-responsive design, ensuring that students and faculty can access the platform on any device. It maintains the core functionalities of the previous versions but is optimized for performance and accessibility.',
                link: 'https://github.com/Arumugam28/E-Learner'
            }
        ]
    };

    return (
        <section className="flex flex-col px-5 py-32 justify-center bg-primary text-white" id="projects">
            <div className="w-full mb-10">
                <div className="flex justify-center">
                    <h1 className="text-5xl text-white border-b-4 border-secondary mb-5 w-[180px] font-bold">Projects</h1>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row gap-10">
                    {config.projects.map((project, index) => (
                        <div key={index} className="relative group w-full md:w-1/3">
                            <img 
                                className="w-full h-[300px] object-cover rounded-lg" 
                                src={project.image} 
                                alt={`Project ${index + 1}`} 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg p-4">
                                <p className="text-center text-sm md:text-lg mb-4">{project.description}</p>
                                <a 
                                    className="btn bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors duration-300"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href={project.link}
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
