import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, MapPin, Phone } from "lucide-react";

interface MinimalistTemplateProps {
  data: PortfolioData;
}

export const MinimalistTemplate = ({ data }: MinimalistTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Looking for Work Banner */}
      {data.lookingForWork && (
        <div className="bg-accent text-accent-foreground py-3 text-center animate-fade-in">
          <p className="text-sm font-medium">✨ Open to new opportunities</p>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                {data.hero.name}
              </h1>
              <p className="text-2xl md:text-3xl text-primary mb-6">
                {data.hero.title}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.hero.description}
              </p>
              <div className="flex gap-4 mt-8">
                <Button className="gradient-primary">Get in Touch</Button>
                <Button variant="outline">View Projects</Button>
              </div>
            </div>
            {data.hero.image && (
              <div className="order-first md:order-last">
                <img
                  src={data.hero.image}
                  alt={data.hero.name}
                  className="w-full h-auto rounded-2xl shadow-elegant object-cover aspect-square"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {data.about.image && (
                <img
                  src={data.about.image}
                  alt="About"
                  className="w-full h-auto rounded-2xl shadow-elegant object-cover"
                />
              )}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.about.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {data.skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.category}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-primary transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-elegant transition-all">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  )}
                </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <a
                href={`mailto:${data.contact.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                {data.contact.email}
              </a>
              {data.contact.phone && (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  {data.contact.phone}
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  {data.contact.location}
                </div>
              )}
            </div>
            <div className="space-y-4">
              {data.contact.linkedin && (
                <a
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn Profile
                </a>
              )}
              {data.contact.github && (
                <a
                  href={data.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  GitHub Profile
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 {data.hero.name}. Built with Portfolio Builder.</p>
        </div>
      </footer>
    </div>
  );
};
