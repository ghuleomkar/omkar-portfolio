import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { VscCode } from "react-icons/vsc";
import { SiRender } from "react-icons/si";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiWebrtc,
  SiSocketdotio,
  SiMysql,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Programming & Core",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Data Structures & Algorithms", icon: null },
      { name: "Object-Oriented Programming", icon: null },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: FaReact },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: null },
      { name: "WebSockets", icon: SiSocketdotio },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
       { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "WebRTC", icon: SiWebrtc },
       { name: "VS Code", icon: VscCode },
      { name: "Render", icon: SiRender },
    ],
  },
];