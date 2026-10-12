
type SkillCategory = {
  title: string
  skills: string[]
}

export function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "ゲーム開発",
      skills: [
        "Unity",
        "Unreal Engine",
        "Godot",
        "ゲームデザイン",
        "レベルデザイン",
        "バランス調整",
      ],
    },
    {
      title: "プログラミング",
      skills: [
        "C#",
        "C++",
        "JavaScript",
        "TypeScript",
        "Python",
        "React",
      ],
    },
    {
      title: "アート & デザイン",
      skills: [
        "Photoshop",
        "Illustrator",
        "Blender",
        "UI/UXデザイン",
        "キャラクターデザイン",
      ],
    },
    {
      title: "その他",
      skills: [
        "プロジェクト管理",
        "アジャイル開発",
        "Git",
        "英語",
      ],
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">スキル</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-white border rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

