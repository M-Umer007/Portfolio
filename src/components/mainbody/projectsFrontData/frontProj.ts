import "@/public/todolistimage/todoapp.png"

interface ProjectProps {
  id : number;
  link: string;
  name: string;
  description: string;
  image:string;
  alt : string;
  smLink: string;
  smName: string;
  tagButtons: string[];
}

const projects: ProjectProps[] = [
    {
      id : 1,
      link: "https://static-blog-webpage.vercel.app/",
      name: "Static Blog",
      description:
        "A static webpage built using HTML and CSS. While it doesn't feature any groundbreaking functionality yet, I plan to enhance it with more interactive elements in the future.",
      image: "/staticwebpageimage/staticblogpage.png",
      alt : "",
      smLink: "https://static-blog-webpage.vercel.app/",
      smName: "Blog website link",
      tagButtons: ["Next.JS", "TypeScript", "Tailwind"],
    },
    {
      id : 2,
      link: "https://resume-generator-gamma.vercel.app/",
      name: "Resume Generator",
      description:
        "This resume generator creates a professional resume based on user-provided details. Its standout feature is its user-friendly interface, which simplifies the resume-building process to almost feel like magic.",
      image:"/resumegeneratorimage/resumegenerator.png",
      alt : "",
      smLink: "https://resume-generator-gamma.vercel.app/",
      smName: "Resume Generator Link",
      tagButtons: ["HTML", "CSS", "TypeScript"],
    },
    {
      id : 3,
      link: "https://quiz-game-sigma-woad.vercel.app/",
      name: "Quiz Website",
      description:
        "A fun and engaging quiz game that generates random questions to test your general knowledge. It's a great way to challenge yourself or make it a fun family activity.",
      image:"/quizgameimage/quizgame.png",
      alt : "",
      smLink: "https://quiz-game-sigma-woad.vercel.app/",
      smName: "Quiz Game Link",
      tagButtons: ["HTML", "CSS"],
    },
    {
      id : 4,
      link: "https://todo-list-in-next-js.vercel.app/",
      name: "Todo App",
      description:
        "My To-Do app may be simple, but the logic and thought process behind it make it one of my favorite personal projects.",
      image:"/todolistimage/todoapp.png",
      alt : "",
      smLink: "https://todo-list-in-next-js.vercel.app/",
      smName: "Todo Webapp Link",
      tagButtons: ["TypeScript", "HTML", "CSS"],
    },
]

export default projects