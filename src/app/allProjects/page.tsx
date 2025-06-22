import "../globals.css"; 
import ProjectComponent from "./components/projectcomponent";
export default function AllProjects() {
  interface ProjectProps {
    link: string;
    name: string;
    description: string;
    smLink: string;
    smName: string;
    tagButtons: string[];
  }

  const projects: ProjectProps[] = [
    {
      link: "https://static-blog-webpage.vercel.app/",
      name: "Static Blog",
      description:
        "A static webpage built using HTML and CSS. While it doesn't feature any groundbreaking functionality yet, I plan to enhance it with more interactive elements in the future.",
      smLink: "https://static-blog-webpage.vercel.app/",
      smName: "Blog website link",
      tagButtons: ["Next.JS", "TypeScript", "Tailwind"],
    },
    {
      link: "https://resume-generator-gamma.vercel.app/",
      name: "Resume Generator",
      description:
        "This resume generator creates a professional resume based on user-provided details. Its standout feature is its user-friendly interface, which simplifies the resume-building process to almost feel like magic.",
      smLink: "https://resume-generator-gamma.vercel.app/",
      smName: "Resume Generator Link",
      tagButtons: ["HTML", "CSS", "TypeScript"],
    },
    {
      link: "https://quiz-game-sigma-woad.vercel.app/",
      name: "Quiz Website",
      description:
        "A fun and engaging quiz game that generates random questions to test your general knowledge. It's a great way to challenge yourself or make it a fun family activity.",
      smLink: "https://quiz-game-sigma-woad.vercel.app/",
      smName: "Quiz Game Link",
      tagButtons: ["HTML", "CSS"],
    },
    {
      link: "https://todo-list-in-next-js.vercel.app/",
      name: "Todo App",
      description:
        "My To-Do app may be simple, but the logic and thought process behind it make it one of my favorite personal projects.",
      smLink: "https://todo-list-in-next-js.vercel.app/",
      smName: "Todo Webapp Link",
      tagButtons: ["TypeScript", "HTML", "CSS"],
    },
    {
      link: "https://animation-css-gallery.vercel.app/",
      name: "Animation Art Gallery",
      description:
        "This animation art gallery is a visually engaging showcase created using only HTML and CSS. While it's non-functional, it features a dynamic layout where each artwork subtly animates, creating an interactive art display.",
      smLink: "https://animation-css-gallery.vercel.app/",
      smName: "Gallery Link",
      tagButtons: ["HTML", "CSS"],
    },
    {
      link: "https://umer-blog-website.vercel.app/",
      name: "Enhanced Blog Website",
      description:
        "A sleek and responsive blog website showcasing modern design and seamless navigation, built using Next.js, TypeScript, and Tailwind CSS. Optimized for performance, it delivers a dynamic user experience with static content generation.",
      smLink: "https://umer-blog-website.vercel.app/",
      smName: "Blog Website Link",
      tagButtons: ["TypeScript", "TailwindCSS", "React", "Next.js"],
    },
    {
      link: "https://tic-tac-toe-react-by-umer.vercel.app/",
      name: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game built with React, showcasing interactive gameplay, efficient state management, and responsive design.",
      smLink: "https://tic-tac-toe-react-by-umer.vercel.app/",
      smName: "Game Website Link",
      tagButtons: ["TypeScript", "TailwindCSS", "React", "Next.js"],
    },
    {
        link: "https://unit-convertor-in-pythongit-dzcpoyrmjmyesm9oasgovb.streamlit.app/",
        name: "Unit Convertor",
        description:
        "A simple yet powerful unit converter built with Python and Streamlit. It allows users to quickly convert between different units of measurement, making it a handy tool for students, engineers, and everyday use.",
        smLink: "https://unit-convertor-in-pythongit-dzcpoyrmjmyesm9oasgovb.streamlit.app/",
        smName: "Movie Convertor Link",
        tagButtons: ["Python", "Streamlit"],
    },
    {
        link:"https://movie-search-dchnkxu29htzjl8ksdz5qy.streamlit.app/",
        name:"Movie Search",
        description:"A movie search app built using Python and Streamlit. Users can enter a movie name to fetch relevant information, including details like genre, cast, and ratings, making it a convenient tool for movie enthusiasts.",
        smLink:"https://movie-search-dchnkxu29htzjl8ksdz5qy.streamlit.app/",
        smName:"Movie Search Link",
        tagButtons:["Python", "Streamlit"],
    },
    {
        link:"https://github.com/M-Umer007/report-card-system",
        name:"Report Card System",
        description:"A report card system made in python",
        smLink:"https://github.com/M-Umer007/report-card-system",
        smName:"report card system Github",
        tagButtons:["Python"],
    },
    {
        link:"https://github.com/M-Umer007/Custom-Encryption-Decryption",
        name:"Custom Encryption Decryption tool",
        description:"Basic encryption decryption tool that encrypts your message based on your difficulty level and then decrypts in python",
        smLink:"https://github.com/M-Umer007/Custom-Encryption-Decryption",
        smName:"Custom encryption decryption Github",
        tagButtons:["Python"],
    },
    {
        link:"https://github.com/M-Umer007/Expense-Tracker",
        name:"Expense Tracker ",
        description:"An expense tracker with an extensive visually appealing graph",
        smLink:"https://github.com/M-Umer007/Expense-Tracker",
        smName:"Expense Tracker Github",
        tagButtons:["Python", "plotly-dash"],
    },
  ];

  return (
    <div className="flex justify-center flex-col items-start top-0 bg-slate-900 min-h-screen ">
      <div className="bg-custom-radial">
        <div className="mx-2 min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="sm:my-10 md:my-14 lg:my-20 ">
            <div className="flex flex-row items-center inset-y-10">
              <div>
                <a href="/">
                  <button
                    type="button"
                    id="group"
                    className="text-white  hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </button>
                </a>
              </div>
              <div>
                <p className="text-white text-sm ">Muhammad Umer</p>
              </div>
            </div>
            <p className="text-white text-3xl my-0 py-0  sm:text-5xl lg:text-6xl">
              All Projects
            </p>
            <table className="mt-12 w-full border-separate border-spacing-y-20 ">
      <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-2 py-4 backdrop-blur">
         <tr>
    <th className="py-4 pr-6 text-sm font-semibold text-slate-200 text-left w-1/5">Project Name</th>
    <th className="py-4 pr-6 text-sm font-semibold text-slate-200 text-left w-2/5">Description</th>
    <th className="hidden sm:table-cell py-4 pr-6 text-sm font-semibold text-slate-200 text-left w-1/5">Link</th>
    <th className="hidden sm:table-cell py-4 pr-6 text-sm font-semibold text-slate-200 text-left w-1/5">Tags</th>
  </tr>
      </thead>
      <tbody className="text-white">
        
        {projects.map((project, index) => (
          <ProjectComponent key={index} {...project} />
        ))}

      </tbody>
    </table>
          </div>
        </div>
      </div>
    </div>
  );
}
