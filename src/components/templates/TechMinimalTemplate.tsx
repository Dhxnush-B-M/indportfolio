import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Code, Terminal } from "lucide-react";

export const TechMinimalTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-3xl w-full">
          <div className="border-2 border-gray-800 p-8 bg-white">
            <div className="flex items-center gap-2 mb-6 text-green-600">
              <Terminal size={20} />
              <span className="text-sm">~/portfolio</span>
            </div>
            {data.hero.image && (
              <img 
                src={data.hero.image} 
                alt={data.hero.name}
                className="w-32 h-32 border-4 border-gray-800 mx-auto mb-6"
              />
            )}
            <h1 className="text-5xl font-bold mb-4 text-gray-900">$ {data.hero.name}</h1>
            <p className="text-xl text-gray-700 mb-2">&gt; {data.hero.title}</p>
            <p className="text-gray-600 leading-relaxed">// {data.hero.description}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-green-600 pl-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">&gt; about.me</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{data.about.bio}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">&gt; skills.list()</h2>
            <div className="space-y-6">
              {data.skills.map((skill, index) => (
                <div key={index} className="border-2 border-gray-800 p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-blue-600" />
                      <span className="font-bold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">[{skill.level}%]</span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-2 flex-1 ${i < skill.level / 10 ? 'bg-green-600' : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">// {skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-purple-600 pl-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">&gt; projects.fetch()</h2>
            <div className="space-y-6">
              {data.projects.map((project, index) => (
                <div key={project.id} className="border-2 border-gray-800 bg-white overflow-hidden">
                  <div className="bg-gray-800 text-white px-4 py-2 flex items-center gap-2">
                    <span className="text-green-400">&gt;</span>
                    <span className="font-bold">{project.title}</span>
                  </div>
                  <div className="p-6">
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover border-2 border-gray-200 mb-4"
                      />
                    )}
                    <p className="text-gray-700 mb-4">// {project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800 text-green-400 text-sm">
                          ${tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-gray-800 p-8 bg-white">
            <div className="border-l-4 border-red-600 pl-6">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">&gt; contact.info</h2>
              <div className="space-y-4 mb-8">
                {data.contact.email && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail size={20} className="text-gray-500" />
                    <span className="font-mono">{data.contact.email}</span>
                  </div>
                )}
                {data.contact.phone && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone size={20} className="text-gray-500" />
                    <span className="font-mono">{data.contact.phone}</span>
                  </div>
                )}
                {data.contact.location && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin size={20} className="text-gray-500" />
                    <span className="font-mono">{data.contact.location}</span>
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                {data.contact.linkedin && (
                  <a href={data.contact.linkedin} className="p-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                )}
                {data.contact.github && (
                  <a href={data.contact.github} className="p-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                )}
                {data.contact.twitter && (
                  <a href={data.contact.twitter} className="p-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
