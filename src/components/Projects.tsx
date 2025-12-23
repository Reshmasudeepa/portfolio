import { Eye, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "MediBot AI",
      description:
        "AI-powered healthcare assistant that provides medication guidance, symptom insights, and chat-based support with secure authentication and real-time interactions.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "AI APIs",
      ],
      liveLink: "https://medibot.ai.com",
      githubLink: "",
    },
    {
      title: "MediVax Portal",
      description:
        "Vaccination management portal to track vaccine details, schedules, and healthcare records with a clean and user-friendly interface.",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
      liveLink: "https://medivaxportal.vercel.app/",
      githubLink: "",
    },
    {
      title: "SRKR College Homepage",
      description:
        "Modern and responsive college homepage showcasing departments, academics, and campus information.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      liveLink: "https://srkrhomepage.vercel.app/",
      githubLink: "",
    },
    {
      title: "Crave Finder",
      description:
        "Food discovery application that helps users explore meals and recipes with a smooth and attractive UI.",
      techStack: ["React", "JavaScript", "API Integration", "Tailwind CSS"],
      liveLink: "https://crave-finder.vercel.app/",
      githubLink: "",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the real-world projects I have built using modern
              web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-xl border bg-background p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-muted border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="gap-2">
                      <Eye size={16} /> Live
                    </Button>
                  </a>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="gap-2">
                        <Github size={16} /> Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
