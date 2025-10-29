import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const DesignerTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Design */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-12">
          <div className="text-white text-center lg:text-left">
            <h1 className="text-7xl font-bold mb-6 leading-tight">{data.hero.name}</h1>
            <p className="text-3xl mb-4 text-indigo-200">{data.hero.title}</p>
            <p className="text-xl text-indigo-100 max-w-lg">{data.hero.description}</p>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center p-12">
          {data.hero.image && (
            <img 
              src={data.hero.image} 
              alt={data.hero.name}
              className="w-full max-w-md rounded-2xl shadow-2xl"
            />
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-6xl font-bold mb-8 text-indigo-600">About</h2>
            <p className="text-xl text-gray-700 leading-relaxed">{data.about.bio}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{skill.level}%</div>
                <div className="text-gray-700 font-semibold">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Alternating Layout */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-center text-indigo-600">Selected Work</h2>
          <div className="space-y-32">
            {data.projects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full rounded-2xl shadow-2xl"
                    />
                  )}
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-4xl font-bold mb-6 text-gray-900">{project.title}</h3>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-6 py-3 bg-indigo-100 text-indigo-700 rounded-full font-semibold"
                      >
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

      {/* Skills Grid */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-center text-indigo-600">Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{skill.level}%</div>
                <div className="text-gray-700 font-semibold mb-1">{skill.name}</div>
                <div className="text-sm text-gray-500">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-center text-indigo-600">Let's Work Together</h2>
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {data.contact.email && (
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-indigo-200 mb-1">Email</div>
                    <div className="font-semibold">{data.contact.email}</div>
                  </div>
                </div>
              )}
              {data.contact.phone && (
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-indigo-200 mb-1">Phone</div>
                    <div className="font-semibold">{data.contact.phone}</div>
                  </div>
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-4 md:col-span-2">
                  <div className="p-4 bg-white/20 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-indigo-200 mb-1">Location</div>
                    <div className="font-semibold">{data.contact.location}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-6 justify-center">
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                  <Linkedin size={28} />
                </a>
              )}
              {data.contact.github && (
                <a href={data.contact.github} className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                  <Github size={28} />
                </a>
              )}
              {data.contact.twitter && (
                <a href={data.contact.twitter} className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all">
                  <Twitter size={28} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
