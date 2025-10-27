import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, Terminal, Code2 } from "lucide-react";

interface DeveloperTemplateProps {
  data: PortfolioData;
}

export const DeveloperTemplate = ({ data }: DeveloperTemplateProps) => {
  return (
    <div className="min-h-screen bg-slate-950 text-green-400 font-mono">
      {/* Terminal-style Header */}
      <div className="border-b border-green-400/30 bg-slate-900 p-4">
        <div className="container mx-auto flex items-center gap-2">
          <Terminal className="h-5 w-5" />
          <span className="text-sm">~/portfolio</span>
          <span className="ml-auto text-sm text-green-400/60">[developer@local]</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-2 text-green-400/60">
            <span>$</span>
            <span className="typing-animation">whoami</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            {data.hero.name}
          </h1>
          <div className="mb-4 text-2xl text-green-300">
            <span className="text-green-400/60">{'> '}</span>
            {data.hero.title}
          </div>
          <p className="text-lg text-green-400/80 mb-8 max-w-2xl">
            {data.hero.description}
          </p>
          <div className="flex gap-4">
            <Button className="bg-green-400 text-slate-950 hover:bg-green-300">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
              <Code2 className="mr-2 h-4 w-4" />
              Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-green-400/30 py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-green-400/60">
              <span>$</span>
              <span>cat about.txt</span>
            </div>
            <Card className="bg-slate-900 border-green-400/30 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {data.about.image && (
                  <img
                    src={data.about.image}
                    alt="About"
                    className="rounded-lg border-2 border-green-400/30"
                  />
                )}
                <div>
                  <p className="text-green-400/90 leading-relaxed mb-6">{data.about.bio}</p>
                  <div className="flex gap-4">
                    {data.contact.github && (
                      <Button size="icon" variant="outline" className="border-green-400/30 text-green-400" asChild>
                        <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {data.contact.linkedin && (
                      <Button size="icon" variant="outline" className="border-green-400/30 text-green-400" asChild>
                        <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-green-400/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-green-400/60">
              <span>$</span>
              <span>ls -la ./skills</span>
            </div>
            <div className="space-y-4">
              {data.skills.map((skill, index) => (
                <Card key={index} className="bg-slate-900 border-green-400/30 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-green-400/60">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded h-2">
                    <div
                      className="h-2 rounded bg-green-400 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-green-400/60">
                    Category: {skill.category}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-t border-green-400/30 py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <div className="mb-6 flex items-center gap-2 text-green-400/60">
              <span>$</span>
              <span>git log --projects</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.projects.map((project) => (
                <Card key={project.id} className="bg-slate-900 border-green-400/30 p-6 hover:border-green-400 transition-colors">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded mb-4 border border-green-400/30"
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-green-300">
                    {project.title}
                  </h3>
                  <p className="text-green-400/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 border border-green-400/30 rounded text-green-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Button variant="outline" size="sm" className="w-full border-green-400/30 text-green-400" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-green-400/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-green-400/60">
              <span>$</span>
              <span>./send-message.sh</span>
            </div>
            <Card className="bg-slate-900 border-green-400/30 p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-green-300">Get In Touch</h2>
              <p className="text-green-400/80 mb-6">
                Want to collaborate? Send me a message.
              </p>
              <div className="mb-6 text-green-400/80">
                <div>Email: {data.contact.email}</div>
                {data.contact.phone && <div>Phone: {data.contact.phone}</div>}
              </div>
              <Button className="bg-green-400 text-slate-950 hover:bg-green-300" asChild>
                <a href={`mailto:${data.contact.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-400/30 py-6 bg-slate-900">
        <div className="container mx-auto px-6 text-center text-green-400/60">
          <p>$ echo "© {new Date().getFullYear()} {data.hero.name}"</p>
        </div>
      </footer>
    </div>
  );
};
