import ResumeImg from '../Asests/resume.jpg';

export default function Contact(){
    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        

        <div className=' flex flex-col items-center'>
          
               <h1 className='text-4xl  border-b-4  border-decondary mb-4 w-[140px] font-bold'>Contact</h1>
               <p className='py-2'>If you want to discuss more in details, Please contact me.</p> <br/>
            <p className='py-2'><span className='font-bold'>E-Mail:</span>bharathmeanstack@gmail.com</p>
            <p className='py-2'><span className='font-bold'>Phone:</span>+91 6383062724</p>

           
        </div>
    </section>
}