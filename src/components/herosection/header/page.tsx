export default function Headerofit() {


  return (
    <div>
      <header className=" flex flex-col items-center  h-auto  lg:h-auto lg:justify-between lg:fixed ">
        {/* header */}
        <div className=" lg:flex lg:flex-col lg:justify-between ">
          <div className="space-y-5 lg:space-y-4">

            <h1 className=" text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Muhammad Umer
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Student</h2>
            <p className="font-sourceSans text-16">I build Front-End websites with passionate designs</p>
          </div>

          <div>
            <nav className="nav hidden lg:block" aria-label="In jump page links">
              <ul className="mt-0 w-max scroll-smooth px-28 py-14 space-y-5">
                <li className="p-0 ">

                  <div className="flex flex-row justify-center items-center group">

                    <div className="h-[1px]  bg-white w-[0px] group-hover:w-[20px] transition-all duration-300 ease-in-out "></div>

                    <div>
                      <a href="#about">
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                      </a>
                    </div>

                  </div>
                </li>
                <div className="flex flex-row justify-center items-center group">

                  <div className="h-[1px]  bg-white w-[0px] group-hover:w-[20px] transition-all duration-300 ease-in-out "></div>

                  <div>
                    <a href="#projects">
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                    </a>
                  </div>

                </div>
                <li>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ul className="ml-1 mt-20 flex items-center ">
          <li className="mr-5 text-xs shrink-0">
            <a href="https://github.com/M-Umer007" target="_blank" rel="noopener noreferrer" >
              <span>GITHUB</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a href="https://www.linkedin.com/in/muhammad-umer-5047322ba/" target="_blank" rel="noopener noreferrer" >
              <span>Linkedin</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>

            </a>
          </li>

          <li className="mr-5 text-xs shrink-0">
            <a href="https://x.com/Zzzumer_" target="_blank" rel="noopener noreferrer" >
              <span>Twitter</span>
              <svg width="40" height="40" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
            </a>
          </li>

          <li className="mr-5 text-xs shrink-0">
            <a href="mailto:umeraijaz32@gmail.com">
              <span>Email</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}