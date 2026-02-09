import AnimatedProjectCard from "./AnimatedProjectCard";

interface Tag {
  name: string;
  class: string;
}

interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string | null;
  image: string;
  tags: Tag[];
}

interface Props {
  projects: Project[];
}

export default function AnimatedProjects({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <AnimatedProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          link={project.link}
          github={project.github}
          image={project.image}
          tags={project.tags}
          index={index}
          featured={index === 0}
        />
      ))}
    </div>
  );
}
