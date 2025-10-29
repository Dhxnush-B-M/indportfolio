import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Star, GitFork } from "lucide-react";

export const GitHubTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Hero Section - GitHub Profile Style */}
      <section className="border-b border-[#30363d] px-8 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          {data.hero.image && (
            <img 
              src={data.hero.image} 
              alt={data.hero.name}
              className="w-72 h-72 rounded-full border-2 border-[#30363d]"
            />
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-semibold mb-2">{data.hero.name}</h1>
            <p className="text-xl text-[#8b949e] mb-4">{data.hero.title}</p>
            <p className="text-[#c9d1d9] mb-6">{data.hero.description}</p>
            
            {/* GitHub-style stats */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 text-[#8b949e]">
                <Star size={16} />
                <span>{data.projects.length} projects</span>
              </div>
              <div className="flex items-center gap-2 text-[#8b949e]">
                <GitFork size={16} />
                <span>{data.skills.length} skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned Repositories - Projects Section */}
      <section className="px-8 py-12 border-b border-[#30363d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Pinned Repositories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <div key={project.id} className="border border-[#30363d] rounded-md p-4 hover:border-[#58a6ff] transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[#58a6ff] font-semibold hover:underline cursor-pointer">{project.title}</h3>
                  <span className="px-2 py-1 text-xs border border-[#30363d] rounded-full text-[#8b949e]">Public</span>
                </div>
                <p className="text-sm text-[#8b949e] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs text-[#58a6ff]">#{tag}</span>
                  ))}
                </div>
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded mt-2 border border-[#30363d]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Activity - Skills Section */}
      <section className="px-8 py-12 border-b border-[#30363d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="border border-[#30363d] rounded-md p-4 hover:border-[#58a6ff] transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#c9d1d9] font-medium">{skill.name}</span>
                  <span className="text-[#8b949e] text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#21262d] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#58a6ff] rounded-full transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-[#8b949e] mt-1 inline-block">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* README - About Section */}
      <section className="px-8 py-12 border-b border-[#30363d]">
        <div className="max-w-6xl mx-auto">
          <div className="border border-[#30363d] rounded-md">
            <div className="border-b border-[#30363d] px-4 py-3 flex items-center gap-2">
              <Github size={16} className="text-[#8b949e]" />
              <span className="font-semibold">README.md</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-[#c9d1d9] leading-relaxed whitespace-pre-line">{data.about.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Footer Style */}
      <section className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="border border-[#30363d] rounded-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {data.contact.email && (
                <div className="flex items-center gap-3 text-[#c9d1d9]">
                  <Mail size={20} className="text-[#8b949e]" />
                  <a href={`mailto:${data.contact.email}`} className="hover:text-[#58a6ff]">{data.contact.email}</a>
                </div>
              )}
              {data.contact.phone && (
                <div className="flex items-center gap-3 text-[#c9d1d9]">
                  <Phone size={20} className="text-[#8b949e]" />
                  <span>{data.contact.phone}</span>
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-3 text-[#c9d1d9]">
                  <MapPin size={20} className="text-[#8b949e]" />
                  <span>{data.contact.location}</span>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} className="p-2 border border-[#30363d] rounded hover:border-[#58a6ff] transition-colors">
                  <Linkedin size={20} className="text-[#8b949e] hover:text-[#58a6ff]" />
                </a>
              )}
              {data.contact.github && (
                <a href={data.contact.github} className="p-2 border border-[#30363d] rounded hover:border-[#58a6ff] transition-colors">
                  <Github size={20} className="text-[#8b949e] hover:text-[#58a6ff]" />
                </a>
              )}
              {data.contact.twitter && (
                <a href={data.contact.twitter} className="p-2 border border-[#30363d] rounded hover:border-[#58a6ff] transition-colors">
                  <Twitter size={20} className="text-[#8b949e] hover:text-[#58a6ff]" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
