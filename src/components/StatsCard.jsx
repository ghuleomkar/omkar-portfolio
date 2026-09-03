function StatsCard({ value, label, description }) {
  return (
    <div className="stats-card">
      <div className="stats-value">{value}</div>

      <h3>{label}</h3>

      <p>{description}</p>
    </div>
  );
}

export default StatsCard;