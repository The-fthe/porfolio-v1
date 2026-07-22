import type { Project } from "../types/project"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <img
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">主な成果:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-700">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            詳細を見る
          </a>
        )}
      </div>
    </div>
  )
}

