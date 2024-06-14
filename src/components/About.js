import AboutImg from '../Asests/about.png';

export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={AboutImg}/>
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
               <h1 className='text-4xl  border-b-4 border-primary mb-4 w-[170px] font-bold'>About Me</h1>
               <p >Hi, i am bharath. As a fresh web developer. I bring a strong foundation in HTML, CSS and Java Script , React.js,
                with a keep interest in Angular.js. Eager to contribute to innovative web projects and continually
                expand my skill set to create dynamic website, single page application, and User - friendly
                website.</p> <br/>
               <p >I am proficient in Frontend skills like React.js,CSS3,HTML5,Redux,Redux Tool kit,Axios and many more.</p> <br/>
               <p>Having Knowledge in Web Development.</p>         
            </div>

           
        </div>
    </section>
}