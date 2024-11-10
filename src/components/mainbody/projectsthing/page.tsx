  import Link from "next/link"
  import projects from "../[productId]/projectsdata"
  import Image from "next/image"


  export default function ProjectsComponent(){

  

return (
  <div id="projects">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
          </div>


  <ul className="mb-0">
   {projects.map((project)=>(
     <li className=" text-[15px] mb-28 sm:mb-20 md:mb-20 lg:mb-0 " key={project.id}>

   
         <div  className=" sm:flex sm:flex-row md:flex md:flex-row md:w-auto ">

         <div className="max-h-48 "> 

           <Link href={`${project.demo}`}>
             {/* <img src={project.image} alt={project.name} width={800} height={200} /> */}
             <h1 className="mb-4 text-[17px] font-extrabold font-mono leading-none tracking-tight text-white md:text-[20px]  lg:text-xl">{project.name}</h1>
             </Link>

             <div className="">
               <p className=" mt-2 text-sm leading-normal min-w-64 md:w-80">{project.description}</p>
             </div>
      

           </div>

            <div className="max-w-[200px] max-h-[200px] mt-10 sm:mt-0 lg:w-[300px] lg:h-[300px]">

           <div className="border border-slate-200/10  md:p-1 md:m-3 text-white">
            <Image
             src={`${project.img}`}
              alt= {`${project.alt}`}
          
              width={1000}
              height={1000}
              /> 
            </div>
                                                       {/*Boht tang kiya isny saaly ny Im HAPPY now  <img src={imags[{project.img}]}/> */}
            </div>
        
         </div>


     </li>
   ))}
 </ul>

 <a href="./allProjects">
 <button className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-200 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
  View All Projects
 
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1.5">
    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
  </svg>
</button>
</a>
 </div>
)

}