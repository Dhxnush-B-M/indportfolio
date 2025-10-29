import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const MonochromeTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 border-b border-white/10">
        <div className="max-w-4xl w-full">
          {data.hero.image && (
            <img 
              src={data.hero.image} 
              alt={data.hero.name}
              className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white grayscale"
            />
          )}
          <h1 className="text-7xl font-bold text-center mb-6 tracking-tight">{data.hero.name}</h1>
          <p className="text-2xl text-center text-white/70 mb-4 uppercase tracking-widest">{data.hero.title}</p>
          <p className="text-center text-white/50 max-w-2xl mx-auto text-lg">{data.hero.description}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 uppercase tracking-wider">About</h2>
          <p className="text-xl text-white/70 leading-relaxed">{data.about.bio}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 uppercase tracking-wider">Expertise</h2>
          <div className="space-y-8">
            {data.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-3">
                  <span className="text-xl font-semibold uppercase tracking-wide">{skill.name}</span>
                  <span className="text-white/50">{skill.level}%</span>
                </div>
                <div className="h-1 bg-white/10">
                  <div 
                    className="h-full bg-white transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 uppercase tracking-wider">Work</h2>
          <div className="space-y-16">
            {data.projects.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full md:w-1/2 h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 uppercase tracking-wide">{project.title}</h3>
                  <p className="text-white/70 mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 border border-white/30 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 uppercase tracking-wider">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {data.contact.email && (
              <div className="flex items-center gap-4 text-lg">
                <Mail className="text-white/50" size={24} />
                <span>{data.contact.email}</span>
              </div>
            )}
            {data.contact.phone && (
              <div className="flex items-center gap-4 text-lg">
                <Phone className="text-white/50" size={24} />
                <span>{data.contact.phone}</span>
              </div>
            )}
            {data.contact.location && (
              <div className="flex items-center gap-4 text-lg">
                <MapPin className="text-white/50" size={24} />
                <span>{data.contact.location}</span>
              </div>
            )}
          </div>
          <div className="flex gap-6">
            {data.contact.linkedin && (
              <a href={data.contact.linkedin} className="p-4 border border-white/30 hover:bg-white hover:text-black transition-all">
                <Linkedin size={24} />
              </a>
            )}
            {data.contact.github && (
              <a href={data.contact.github} className="p-4 border border-white/30 hover:bg-white hover:text-black transition-all">
                <Github size={24} />
              </a>
            )}
            {data.contact.twitter && (
              <a href={data.contact.twitter} className="p-4 border border-white/30 hover:bg-white hover:text-black transition-all">
                <Twitter size={24} />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
