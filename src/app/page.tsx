import './globals.css'; // Ensure this includes Tailwind imports\
import Headerofit from "../components/herosection/header/page";
import Aboutsection from "../components/mainbody/aboutsection/page";
import ProjectsComponent from '../components/mainbody/projectsthing/page';
import Footercomponent from '../components/footer/footercomponent/page';

function Home() {
  return (
    <div className='bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'>
      <div className='lg:bg-custom-radial'>
        <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24 '>
          <div className=" min-h-[100vh] max-h-auto min-w-[0vh] max-w-auto flex flex-col    lg:grid grid-cols-2  gap-4 ">
            {/* container */}
            <div className='col-start-1  lg:row-start-1  '>
              <Headerofit />
            </div>

            <div className='lg: col-start-2 row-start-1  w-full h-full ' >
              <Aboutsection />
            </div>

            <div className='col-start-2 row-start-2'>
              <ProjectsComponent />
            </div>

            <div className='col-start-2 row-start-3' >
              <Footercomponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home