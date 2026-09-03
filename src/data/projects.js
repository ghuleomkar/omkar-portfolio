export const projects = [
  {
    id: 1,
    name: "NexMeet",
    image:"/nexmeet.png",
    featured: true,
    type: "Featured Project",
    description:
      "A real-time video conferencing platform focused on seamless peer-to-peer communication and real-time interaction.",

    technologies: ["React", "Node.js", "WebRTC", "Socket.io"],

    features: [
      "Real-time video communication",
      "Peer-to-peer WebRTC functionality",
      "Real-time signaling and communication",
      "Interactive multi-user experience",
    ],

     github: "https://github.com/ghuleomkar/NexMeet",
    live: "https://apna-video-call-1-tbh6.onrender.com/",
  },

  {
    id: 2,
    name: "Rentify",
     image:"/rentify.png",
    featured: false,
    type: "Full Stack Application",
    description:
      "An Airbnb-inspired property rental platform where users can browse listings, manage properties, upload images, and interact through reviews.",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Passport.js",
      "Cloudinary",
    ],

    features: [
      "Authentication and authorization",
      "Create, edit, and delete listings",
      "Reviews and ratings",
      "Search and filtering",
      "Image uploads and maps integration",
    ],

    github: "https://github.com/ghuleomkar/Rentify",
    live: "https://rentify-1-wi81.onrender.com/",
  },

  {
    id: 3,
    name: "CodeLens",
     image:"/codelens.png",
    featured: false,
    type: "AI-Powered Application",
    description:
      "An AI-powered GitHub code reviewer that analyzes public repositories and provides summaries, file-wise reviews, and improvement suggestions.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GitHub API",
      "Google Gemini API",
    ],

    features: [
      "Analyze public GitHub repositories",
      "AI-generated repository summaries",
      "File-wise code review",
      "Detect issues and possible improvements",
    ],

     github: "https://github.com/ghuleomkar/codeLens",
    live: "https://code-lens-opal.vercel.app/",
  },
];