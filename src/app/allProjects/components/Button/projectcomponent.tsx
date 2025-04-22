import Button from "./button";

interface ProjectProps {
    link: string;
    name: string;
    description: string;
    smLink: string;
    smName: string;
    tagButtons: string[];
  }
  
  const ProjectComponent: React.FC<ProjectProps> = ({link,name, description,smLink,smName,tagButtons,}) => {
    return (
      <tr>
        <td className="py-4 pr-4 align-top text-sm">
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="sm:pointer-events-none sm:cursor-default">
              {name}
            </a>
          </div>
        </td>
        <td>
          <div className="mt-2 text-sm leading-normal">{description}</div>
        </td>
        <td className="hidden sm:block">
          <div>
            <a href={smLink} target="_blank" rel="noopener noreferrer" >{smName} </a>
          </div>
        </td>
        <td className="hidden sm:block">
          <ul>
            {tagButtons.map((tag, index) => (
              <li key={index}>
                <Button>{tag}</Button>
              </li>
            ))}
          </ul>
        </td>
      </tr>
    );
  };
  
  export default ProjectComponent;
  