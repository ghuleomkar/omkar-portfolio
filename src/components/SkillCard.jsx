function SkillCard({ name, Icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {Icon ? <Icon size={22} /> : <span>{"</>"}</span>}
      </div>

      <span className="skill-name">{name}</span>
    </div>
  );
}

export default SkillCard;