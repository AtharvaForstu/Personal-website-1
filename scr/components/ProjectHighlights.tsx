export default function ProjectHighlights() {
  const projects = [
    {
      id: 1,
      title: "Skin Disease Detection",
      description: "A CNN and Decision Tree-based system to identify skin diseases.",
      link: "#",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd1JwTVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6488416bc02c9d1f7f26ac4187993841be61d325/skin-disease-detection.jpg",
    },
    {
      id: 2,
      title: "WhatsApp Scholarship Bot",
      description: "A chatbot to simplify scholarship applications for students.",
      link: "#",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0ZwTVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4ad1324f3b9a8d6070b5b557a944408d57a72ce3/scholarship-bot.jpg",
    },
    {
      id: 3,
      title: "VR Real Estate Tours",
      description: "An immersive virtual reality solution for real estate exploration.",
      link: "#",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd1ZwTVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b430ffb17c23fcc984d4020c4b8e13a178c78e7e/vr-real-estate.jpg",
    },
    {
      id: 4,
      title: "Face Swapping Tool",
      description: "An AI-powered tool for seamless face swapping in images.",
      link: "#",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0JwTVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--870030bfe5125a4c9ce0cb4fbe49fa158f902a52/face-swapping-tool.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-4">
          Project Highlights
        </h2>
        <p className="text-xl text-gray-300">A glimpse into my work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group p-6 rounded-lg border border-gray-800 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <div className="relative z-10 bg-black bg-opacity-80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-purple-400 hover:text-pink-400 underline"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}