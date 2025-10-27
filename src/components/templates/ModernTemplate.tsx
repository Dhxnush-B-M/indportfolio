import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Briefcase } from "lucide-react";

interface ModernTemplateProps {
  data: PortfolioData;
}

export const ModernTemplate = ({ data }: ModernTemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {data.lookingForWork && (
        <div className="bg-gradient-to-r from-accent to-primary text-white py-3 text-center font-medium animate-fade-in">
          <Briefcase className="inline-block h-4 w-4 mr-2" />
          Available for new opportunities
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-6xl font-bold">
                <span className="text-gradient">{data.hero.name}</span>
              </h1>
              <h2 className="text-3xl font-semibold text-muted-foreground">
                {data.hero.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.hero.description}
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="gradient-primary shadow-elegant">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </div>
            </div>
            {data.hero.image && (
              <div className="animate-scale-in">
                <img
                  src={data.hero.image}
                  alt={data.hero.name}
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {data.about.image && (
                <img
                  src={data.about.image}
                  alt="About"
                  className="rounded-2xl shadow-xl"
                />
              )}
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">{data.about.bio}</p>
                <div className="flex gap-4 pt-4">
                  {data.contact.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {data.contact.github && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {data.skills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 animate-fade-in">
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full gradient-primary transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group animate-fade-in">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <Button variant="outline" size="sm" className="w-full" asChild>
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {data.contact.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href={`mailto:${data.contact.email}`} className="hover:text-primary transition-colors">
                    {data.contact.email}
                  </a>
                </div>
              )}
              {data.contact.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={`tel:${data.contact.phone}`} className="hover:text-primary transition-colors">
                    {data.contact.phone}
                  </a>
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{data.contact.location}</span>
                </div>
              )}
            </div>
            <Button size="lg" className="gradient-primary shadow-elegant" asChild>
              <a href={`mailto:${data.contact.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-card/50">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} {data.hero.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
