import Button from "./button";

interface ProjectProps {
  link: string;
  name: string;
  description: string;
  smLink: string;
  smName: string;
  tagButtons: string[];
}

const ProjectComponent: React.FC<ProjectProps> = ({
  link,
  name,
  description,
  smLink,
  smName,
  tagButtons,
}) => {
  return (
    <tr>
      <td className="py-4 pr-6 align-top text-sm">
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:pointer-events-none sm:cursor-default"
          >
            {name}
          </a>
        </div>
      </td>
      <td>
        <div className="mt-2 text-sm leading-normal">{description}</div>
      </td>
      <td className="">
        <div className="hidden sm:block">
          <a href={smLink} target="_blank" rel="noopener noreferrer">
            {smName}{" "}
          </a>
        </div>
      </td>
      <td className="">
        <div className="flex flex-wrap gap-1 hidden sm:block">
          {tagButtons.map((tag, index) => (
            <Button key={index}>{tag}</Button>
          ))}
        </div>
      </td>
    </tr>
  );
};

export default ProjectComponent;
