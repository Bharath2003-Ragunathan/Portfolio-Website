import ResumeImg from '../Asests/resume.jpg';

export default function Resume(){
      const config = {
        link:'https://drive.google.com/file/d/1G5A7YVS9QmhmM0yOqGOPZTGPTexNTXGK/view?usp=drivesdk'
      }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className = 'w-[300px]' src={ResumeImg}/>
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
               <h1 className='text-4xl  border-b-4 border-primary mb-4 w-[140px] font-bold'>Resume</h1>
               <p >You can view my Resume <a className='btn' href={config.link}>Download</a></p> <br/>
              
            </div>

           
        </div>
    </section>
}