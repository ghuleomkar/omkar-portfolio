import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          label="SKILLS & TECHNOLOGIES"
          title="Tools I use to build and solve."
          description="A growing technical toolkit focused on software development, full-stack applications, and problem-solving."
        />

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.title}>
              <h3>{category.title}</h3>

              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    Icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;