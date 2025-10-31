import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

interface CreativeTemplateProps {
  data: PortfolioData;
}

export const CreativeTemplate = ({ data }: CreativeTemplateProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Looking for Work Banner */}
      {data.lookingForWork && (
        <div className="gradient-accent text-white py-3 text-center animate-slide-in">
          <p className="text-sm font-medium">🎯 Available for freelance projects</p>
        </div>
      )}

      {/* Hero Section - Creative Grid */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {data.hero.title}
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              {data.hero.name.split(" ")[0]}
              <br />
              <span className="text-gradient">{data.hero.name.split(" ")[1]}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {data.hero.description}
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gradient-primary shadow-glow">
                Let's Collaborate
              </Button>
              <Button size="lg" variant="outline">
                View Work
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 animate-scale-in" />
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-6 text-gradient">About Me</h2>
            {data.about.image && (
              <img
                src={data.about.image}
                alt="About"
                className="rounded-2xl shadow-elegant mb-6 w-full max-w-md"
              />
            )}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {data.about.bio}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {data.contact.linkedin && (
              <Button variant="outline" className="w-full justify-start gap-3 hover-lift">
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </Button>
            )}
            {data.contact.github && (
              <Button variant="outline" className="w-full justify-start gap-3 hover-lift">
                <Github className="h-5 w-5" />
                Follow on GitHub
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section - Card Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <div className="text-sm text-primary font-medium mb-2">
                {skill.category}
              </div>
              <div className="text-2xl font-bold mb-4">{skill.name}</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-accent transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section - Staggered Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden hover:shadow-elegant transition-all hover-lift ${
                index % 2 === 0 ? "md:mt-8" : ""
              }`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10" />
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-4 py-2 rounded-full border border-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <Button variant="default" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="outline" className="gap-2">
                      <Github className="h-4 w-4" />
                      Source
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section - CTA */}
      <section className="container mx-auto px-6 py-20">
        <Card className="p-12 text-center gradient-primary text-white">
          <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always open to discussing new projects and opportunities
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-3"
            onClick={() => window.location.href = `mailto:${data.contact.email}`}
          >
            <Mail className="h-5 w-5" />
            {data.contact.email}
          </Button>
        </Card>
      </section>

      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 {data.hero.name}. Crafted with passion.</p>
        </div>
      </footer>
    </div>
  );
};
