function SectionHeading({ label, title, description }) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;