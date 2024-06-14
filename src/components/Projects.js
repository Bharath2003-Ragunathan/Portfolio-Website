import websiteImg1 from '../Asests/Amazon clone.png';
import websiteImg2 from '../Asests/Apple store project.png';
import websiteImg3 from '../Asests/Length convetor.png';

export default function Projects() {
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl  border-b-4 border-secondary mb-4 w-[150px] font-bold'>Projects</h1>
            <p className=''>These are some of my best projects. I have build these with React,CSS,HTML. Check them out.</p>
            </div>
          
        </div>
          <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5 '>
                <div className='relative'>
                <img className='h-[200px] w-[500px]' src={websiteImg1}/>
                <div className='project-desc'>
                    <p className='text-center  px-5 py-5'>This E-commerce website build with HTML5 and CSS3 </p>
                </div>
                </div>
                <div className='relative' >
                <img className='h-[200px]  w-[500px]' src={websiteImg2}/>
                <div  className='project-desc'>
                    <p  className='text-center px-5 py-5'>This Apple store project build with HTML5,CSS3 and Java Script</p>
                </div>
                </div>
                <div className='relative'>
                <img className='h-[200px]  w-[500px]' src={websiteImg3}/>
                <div className='project-desc'>
                    <p  className='text-center px-5 py-5'>This Length convetor are build with HTML5,CSS3 and Java Script with 64 combinations</p>
                </div>
                </div>
         
            
            </div>
           
          </div>
    </section>
}