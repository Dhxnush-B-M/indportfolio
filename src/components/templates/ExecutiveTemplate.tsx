import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Award } from "lucide-react";

export const ExecutiveTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section - Elegant */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {data.hero.image && (
              <div>
                <img 
                  src={data.hero.image} 
                  alt={data.hero.name}
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-4 border-amber-500"
                />
              </div>
            )}
            <div>
              <h1 className="text-6xl font-serif font-bold mb-6 text-amber-400">{data.hero.name}</h1>
              <p className="text-2xl text-gray-300 mb-6 font-light">{data.hero.title}</p>
              <p className="text-xl text-gray-400 leading-relaxed">{data.hero.description}</p>
              <div className="mt-8 h-1 w-32 bg-gradient-to-r from-amber-500 to-amber-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Award className="text-amber-500" size={48} />
            <h2 className="text-5xl font-serif font-bold text-amber-400">Profile</h2>
          </div>
          <p className="text-2xl text-gray-300 leading-relaxed font-light">{data.about.bio}</p>
        </div>
      </section>

      {/* Skills Section - Professional */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-16 text-amber-400">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/50 border border-amber-500/20 rounded-lg p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-xl font-bold text-amber-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 inline-block">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-16 text-amber-400">Key Achievements</h2>
          <div className="space-y-12">
            {data.projects.map((project) => (
              <div key={project.id} className="bg-slate-900 border-l-4 border-amber-500 rounded-r-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-3xl font-serif font-bold mb-4 text-white">{project.title}</h3>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 border border-amber-500/30 text-amber-400 rounded text-sm uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-16 text-center text-amber-400">Contact</h2>
          <div className="bg-slate-800/50 border border-amber-500/20 rounded-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {data.contact.email && (
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-amber-500/10 rounded-full">
                    <Mail className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <div className="text-lg text-white">{data.contact.email}</div>
                  </div>
                </div>
              )}
              {data.contact.phone && (
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-amber-500/10 rounded-full">
                    <Phone className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <div className="text-lg text-white">{data.contact.phone}</div>
                  </div>
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-4 md:col-span-2">
                  <div className="p-4 bg-amber-500/10 rounded-full">
                    <MapPin className="text-amber-500" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-lg text-white">{data.contact.location}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-6 justify-center pt-8 border-t border-amber-500/20">
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} className="p-4 bg-amber-500/10 rounded-full hover:bg-amber-500/20 transition-all">
                  <Linkedin className="text-amber-500" size={28} />
                </a>
              )}
              {data.contact.github && (
                <a href={data.contact.github} className="p-4 bg-amber-500/10 rounded-full hover:bg-amber-500/20 transition-all">
                  <Github className="text-amber-500" size={28} />
                </a>
              )}
              {data.contact.twitter && (
                <a href={data.contact.twitter} className="p-4 bg-amber-500/10 rounded-full hover:bg-amber-500/20 transition-all">
                  <Twitter className="text-amber-500" size={28} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
