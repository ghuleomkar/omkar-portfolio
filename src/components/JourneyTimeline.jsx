function JourneyTimeline({ item, isLast }) {
  return (
    <article className="journey-item">
      <div className="journey-marker">
        <span>{item.step}</span>
      </div>

      {!isLast && <div className="journey-line" />}

      <div className="journey-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default JourneyTimeline;