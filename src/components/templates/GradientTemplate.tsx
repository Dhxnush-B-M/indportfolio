import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, Sparkles } from "lucide-react";

interface GradientTemplateProps {
  data: PortfolioData;
}

export const GradientTemplate = ({ data }: GradientTemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
      {/* Hero Section with Glassmorphism */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full backdrop-blur-lg bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20 animate-scale-in">
          {data.hero.image && (
            <div className="flex justify-center mb-8">
              <img
                src={data.hero.image}
                alt={data.hero.name}
                className="w-48 h-48 rounded-full object-cover border-8 border-white/30 shadow-2xl"
              />
            </div>
          )}
          <h1 className="text-6xl md:text-7xl font-bold text-white text-center mb-4 animate-fade-in">
            {data.hero.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 text-center mb-6 font-light">
            {data.hero.title}
          </h2>
          <p className="text-lg text-white/80 text-center mb-8 max-w-2xl mx-auto">
            {data.hero.description}
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 shadow-lg">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Sparkles className="mr-2 h-5 w-5" />
              View Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-teal-500 to-green-500">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border-white/20 text-white p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {data.about.image && (
                <img
                  src={data.about.image}
                  alt="About"
                  className="rounded-2xl shadow-2xl border-4 border-white/20"
                />
              )}
              <div>
                <p className="text-lg leading-relaxed text-white/90 mb-6">{data.about.bio}</p>
                <div className="flex gap-4">
                  {data.contact.linkedin && (
                    <Button size="icon" className="bg-white/20 hover:bg-white/30" asChild>
                      <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {data.contact.github && (
                    <Button size="icon" className="bg-white/20 hover:bg-white/30" asChild>
                      <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skills.map((skill, index) => (
              <Card key={index} className="backdrop-blur-lg bg-white/10 border-white/20 p-6">
                <h3 className="font-semibold text-white mb-3">{skill.name}</h3>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-white shadow-glow transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-sm text-white/80 mt-2">{skill.category} • {skill.level}%</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Work</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project) => (
              <Card key={project.id} className="backdrop-blur-lg bg-white/10 border-white/20 overflow-hidden group">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/20 text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white/10" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto backdrop-blur-lg bg-white/10 border-white/20 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-lg text-white/90 mb-8">
              Ready to bring your ideas to life? Let's talk about your next project.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 shadow-lg" asChild>
              <a href={`mailto:${data.contact.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <div className="mt-8 text-white/80">
              {data.contact.email}
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-6 text-center text-white/80">
          <p>© {new Date().getFullYear()} {data.hero.name}. Designed with passion.</p>
        </div>
      </footer>
    </div>
  );
};
