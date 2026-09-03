import SectionHeading from "../components/SectionHeading";
import JourneyTimeline from "../components/JourneyTimeline";
import { journey } from "../data/journey";

function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <SectionHeading
          label="DEVELOPER JOURNEY"
          title="Always building. Always learning."
          description="My journey so far has been focused on strengthening fundamentals, building practical projects, and continuously exploring modern software technologies."
        />

        <div className="journey-timeline">
          {journey.map((item, index) => (
            <JourneyTimeline
              key={item.step}
              item={item}
              isLast={index === journey.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;