// "use client"

// import { useParams } from 'next/navigation';
// import projects from './projectsdata';


// export default function ProjectPage() {
//     const params = useParams(); // This will fetch the route parameters
//     const projectId = params.productId; // Assuming you're passing productId

//     let project = projects.find((projects) => projects.id === projectId);
//     if(!project)
//         return <p>Data not found!</p>;

//     return (
//         <div >
//             <main>
//                 {/* my projects */}
//                 <h2>My Project {projectId}</h2>
//             </main>

//             <div>
//                 <div className=''>Project ID: {project.id}</div> 
//                 <div className=''>Project Name: {project.name}</div>
//                 <div className=''>Project Description: {project.description}</div>

//             </div>

//         </div>
//     );
// }
