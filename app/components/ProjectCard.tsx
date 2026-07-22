import { useState } from "react"
import type { Project } from "../types/project"
import { SwitchIcon, ItchIcon } from "./BrandIcons"

type ProjectCardProps = {
  project: Project
}

const LINK = {
  switch: { label: "Switchで見る", Icon: SwitchIcon },
  itch: { label: "itch.ioで見る", Icon: ItchIcon },
} as const

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgOk, setImgOk] = useState(true)
  const cta = project.platform ? LINK[project.platform] : null

  return (
    <div className="card">
      <div className="card__media">
        {project.image && imgOk ? (
          <img
            src={project.image}
            alt={`${project.title} のスクリーンショット`}
            className="card__img"
            onError={() => setImgOk(false)}
          />
        ) : (
          project.technologies[0] ?? project.title
        )}
      </div>
      <div className="card__body">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__description muted">{project.description}</p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card__cta btn btn--icon"
          >
            {cta && <cta.Icon className="btn__logo" />}
            {cta ? cta.label : "詳細を見る"}
          </a>
        )}
      </div>
    </div>
  )
}
