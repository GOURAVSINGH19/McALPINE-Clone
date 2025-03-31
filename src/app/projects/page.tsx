import Link from "next/link";
import data from "../../project";

const Projects = () => {
  return (
    <ul className="project-list">
      {data.map((project) => (
        <li key={project.id}>
          <div className="link">
            <span>&#8594;</span>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Projects;