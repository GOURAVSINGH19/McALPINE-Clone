import data from "../../../project";
import Navbar from "../../components/navbar";
import Preloader from "../../components/preloader";
import ProjectClient from "./project-client";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;

  const project = data.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const currentIndex = data.findIndex((p) => p.slug === slug);
  const nextIndex = (currentIndex + 1 + data.length) % data.length;
  const prevIndex = (currentIndex - 1 + data.length) % data.length;

  const nextProject = data[nextIndex];
  const prevProject = data[prevIndex];

  return (
    <>
      <Navbar />
      <ProjectClient
        project={project}
        nextProject={nextProject}
        prevProject={prevProject}
      />
    </>
  );
}
