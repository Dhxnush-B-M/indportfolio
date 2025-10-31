import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, MapPin, Phone, Briefcase } from "lucide-react";

interface CorporateTemplateProps {
  data: PortfolioData;
}

export const CorporateTemplate = ({ data }: CorporateTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">{data.hero.name}</div>
            <nav className="hidden md:flex gap-6">
              <a href="#about" className="text-sm hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
            {data.lookingForWork && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
                Available
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
            <Briefcase className="h-4 w-4" />
            {data.hero.title}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            {data.hero.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {data.hero.description}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gradient-primary">
              Contact Me
            </Button>
            <Button size="lg" variant="outline">
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Summary</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {data.about.image && (
                  <img
                    src={data.about.image}
                    alt="About"
                    className="rounded-lg shadow-lg"
                  />
                )}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.about.bio}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Competencies</h2>
          <div className="grid gap-8">
            {Object.entries(
              data.skills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill);
                return acc;
              }, {} as Record<string, typeof data.skills>)
            ).map(([category, skills]) => (
              <Card key={category} className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover-lift">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10" />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-md bg-muted text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.link && (
                        <Button variant="outline" size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Visit Site
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          View Code
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Information</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Email</div>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    {data.contact.email}
                  </a>
                </div>
                {data.contact.phone && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Phone</div>
                    <div className="flex items-center gap-3 text-lg">
                      <Phone className="h-5 w-5" />
                      {data.contact.phone}
                    </div>
                  </div>
                )}
                {data.contact.location && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Location</div>
                    <div className="flex items-center gap-3 text-lg">
                      <MapPin className="h-5 w-5" />
                      {data.contact.location}
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground mb-4">
                  Professional Networks
                </div>
                {data.contact.linkedin && (
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </Button>
                )}
                {data.contact.github && (
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Github className="h-5 w-5" />
                    GitHub Profile
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>
            © 2024 {data.hero.name}. All rights reserved. | Built with Portfolio
            Builder
          </p>
        </div>
      </footer>
    </div>
  );
};
