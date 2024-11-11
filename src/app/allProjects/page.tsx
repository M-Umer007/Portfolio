import '../globals.css'; // Ensure this includes Tailwind imports\
import Button from './components/Button/button';
export default function AllProjects() {
    return (

        <div className='flex justify-center flex-col items-start top-0 bg-slate-900 min-h-screen '>



            <div className='bg-custom-radial'>
                <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
                
                    <div className='sm:my-10 md:my-14 lg:my-20 '>
                    <div className='flex flex-row items-center inset-y-10'>
                    <div>
                        <a href="/">
                            <button type="button" id='group' className="text-white  hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                            </svg>
                            <span className="sr-only">Icon description</span>
                            </button>
                        </a>
                    </div>
                    <div>
                        <p className='text-white text-sm '>Muhammad Umer</p>
                    </div>
                </div>
                <p className='text-white text-3xl my-0 py-0  sm:text-5xl lg:text-6xl'>All Projects</p>
                        <table className='mt-12 w-full border-separate border-spacing-y-10  text-left '>
                
                            <thead className="sticky top-0 z-10 border-b w-full  border-slate-300/10 bg-slate-900/75 px-2 py-20 backdrop-blur">
                
                        <tr className=''>
                                <th className="py-4 pr-12 text-sm font-semibold text-slate-200">Project Name</th>
                                <th className="py-4 pr-12 text-sm font-semibold text-slate-200">Description </th>
                                <th className="hidden py-4 pr-12 text-sm font-semibold text-slate-200 sm:block">Link</th>
                                {/* <th className="hidden py-4 pr-12 text-sm font-semibold text-slate-200 lg:block">Built with</th> */}
                                    </tr>
                            </thead>
                
                                    <tbody className="text-white ">
                                <tr>
                                    <td className="py-4 pr-4 align-top text-sm">
                                    <div>Static Blog </div>
                                    </td>
                                     <td>
                        <div className='mt-2 text-sm leading-normal' >A Static webpage using html css it donot currently have any mindblowing functionality but i will surely work it out and make something out of it</div>
                                    </td>
                                    <td className='hidden sm:block'>
                                    <div>
                                    <a href="https://static-blog-webpage.vercel.app/">
                                    Blog website link
                                    </a>
                                    </div>
                                    </td>
                
                                     <td className='hidden sm:block'>
                
                            <ul>
                                <li><Button>Next.JS</Button></li>
                                <li><Button>Typescript</Button></li>
                                <li><Button>Tailwind</Button></li>
                
                            </ul>
                
                                    </td>
                                 </tr>
                
                                <tr>
                                    <td className="py-4 pr-4 align-top text-sm">
                        <div>Resume generator</div>
                                    </td>
                                    <td>
                                     <div className='mt-2 text-sm leading-normal'>Will generate a resume based on the datails provided by the user its speciality is that it is super easy to use and work out everything like magic
                                    </div>
                                    </td>
                
                                    <td className='hidden sm:block'>
                        <div> <a href="https://resume-generator-gamma.vercel.app/">Resume Generator Link</a>
                        </div>
                                     </td>
                
                                     <td className='hidden sm:block'>
                                     <ul>
                                <li><Button>Html</Button></li>
                                <li><Button>CSS</Button></li>
                                <li><Button>Typescript</Button></li>
                
                            </ul>
                                    </td>
                                </tr>
                
                                <tr>
                                    <td className="py-4 pr-4 align-top text-sm">
                        <div>Quiz Website</div>
                                    </td>
                
                                    <td>
                                     <div className='mt-2 text-sm leading-normal'>A Simple and fun quiz game that will generate random question it tests your general knowledge could be a fun family activity if you know how to make things work out</div>
                                    </td>
                
                                    <td className='hidden sm:block'>
                        <div > <a href="https://quiz-game-sigma-woad.vercel.app/">Quiz Game Link</a> </div>
                                    </td>
                
                                    <td className='hidden sm:block'>
                                    <ul>
                             
                                <li><Button>Html</Button></li>
                                <li><Button>CSS</Button></li>
                
                            </ul>
                                    </td>
                             </tr>
                            <tr>
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div>Todo app</div>
                                </td>
                                <td>
                                    <div className='mt-2 text-sm leading-normal'>My Todo app its not very much but the logic behind it and how I come up with it is the thing that made it one of my personal favourite projects .</div>
                                </td>
                                <td className='hidden sm:block'>
                                    <div> <a href="https://todo-list-in-next-js.vercel.app/">Todo Webapp Link </a></div>
                                </td>
                                <td className='hidden sm:block'>
                                <ul>
                                <li><Button>Typescript</Button></li>
                                <li><Button>Html</Button></li>
                                <li><Button>CSS</Button></li>
                
                            </ul>
                                    </td>
                            </tr>
                            <tr>
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div>ANIMATION ART GALLERY</div>
                                </td>
                                <td>
                                    <div className='mt-2 text-sm leading-normal'>My animation art gallery showcases a simple, visually engaging display using just HTML and CSS. Although non-functional, it’s a dynamic layout where each artwork subtly animates, giving a sneak peek into interactive art displays.</div>
                                </td>
                                <td className='hidden sm:block'>
                                    <div> <a href="https://animation-css-gallery.vercel.app/">GALLERY LINK </a></div>
                                </td>
                                <td className='hidden sm:block'>
                                <ul>
                                <li><Button>Html</Button></li>
                                <li><Button>CSS</Button></li>
                
                            </ul>
                                    </td>
                            </tr>
                        </tbody>
                        </table>
                                    </div>
                    </div>
            </div>
        </div>
        
    );
}
