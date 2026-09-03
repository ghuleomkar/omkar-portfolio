import { FaCode} from "react-icons/fa";
import { SiLeetcode,SiGeeksforgeeks  } from "react-icons/si";

import SectionHeading from "../components/SectionHeading";
import StatsCard from "../components/StatsCard";

function CodingProfiles() {
  return (
    <section id="coding" className="section coding-section">
      <div className="container">
        <SectionHeading
          label="PROBLEM SOLVING"
          title="Learning to solve problems, one challenge at a time."
          description="A strong focus on Data Structures and Algorithms, pattern recognition, and improving problem-solving skills through consistent practice."
        />

        <div className="coding-layout">
          <div className="coding-intro">
            <div className="coding-icon">
              <FaCode />
            </div>

            <h3>Data Structures & Algorithms</h3>

            <p>
              I actively practice algorithmic problems and focus on building
              strong fundamentals across important data structures, algorithms,
              and problem-solving patterns.
            </p>

            <div className="topics-list">
              <span>Arrays</span>
              <span>Strings</span>
              <span>Linked Lists</span>
              <span>Trees</span>
              <span>Graphs</span>
              <span>Dynamic Programming</span>
              <span>Binary Search</span>
              <span>Recursion</span>
            </div>
          </div>

          <div className="stats-grid">
            <StatsCard
              value="500+"
              label="Problems Solved"
              description="Consistent practice across multiple DSA topics and patterns."
            />

            <StatsCard
              value="1794"
              label="Highest Rating"
              description="Highest rating achieved on LeetCode."
            />

            <StatsCard
              value="Top 8%"
              label="Best Ranking"
              description="Previously reached the top 8% of LeetCode users."
            />

            <a
              href="https://leetcode.com/u/Omkar_1234/"
              className="leetcode-card"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode size={34} />

              <div>
                <span>CODING PROFILE</span>
                <h3>View LeetCode Profile ↗</h3>
              </div>
            </a>

            <a
  href="https://www.geeksforgeeks.org/profile/samarthgvbq3?tab=activity"
  className="leetcode-card"
  target="_blank"
  rel="noreferrer"
>
  <SiGeeksforgeeks size={34} />

  <div>
    <span>CODING PROFILE</span>
    <h3>View GFG Profile ↗</h3>
  </div>
</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;