import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const GeometricTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 opacity-20 transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 opacity-20 transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 opacity-20 transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
        </div>
        <div className="max-w-4xl w-full relative z-10">
          {data.hero.image && (
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 transform rotate-6"></div>
              <img 
                src={data.hero.image} 
                alt={data.hero.name}
                className="w-full h-full object-cover relative z-10 transform -rotate-6"
              />
            </div>
          )}
          <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{data.hero.name}</h1>
          <p className="text-2xl text-center text-gray-700 mb-4 font-semibold">{data.hero.title}</p>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">{data.hero.description}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute left-0 top-1/2 w-32 h-32 bg-yellow-200 opacity-30 transform -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white/80 backdrop-blur-sm p-12 transform hover:scale-105 transition-transform duration-300" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}>
            <h2 className="text-4xl font-bold mb-8 text-purple-600">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{data.about.bio}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute right-0 top-1/4 w-40 h-40 bg-green-200 opacity-30 transform rotate-45"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 transform hover:-translate-y-2 transition-all duration-300" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}>
                <h3 className="text-xl font-bold mb-3 text-purple-600">{skill.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 relative overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 font-semibold">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute left-1/4 top-1/2 w-48 h-48 bg-red-200 opacity-20 transform -rotate-12"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div key={project.id} className="bg-white overflow-hidden transform hover:scale-105 transition-all duration-300" style={{ clipPath: index % 2 === 0 ? 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)' : 'polygon(0 0, 100% 5%, 100% 95%, 0 100%)' }}>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-blue-600">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold">
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
      <section className="py-24 px-8 relative">
        <div className="absolute right-10 top-10 w-36 h-36 bg-orange-200 opacity-30 transform rotate-45"></div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-12 transform hover:scale-105 transition-transform duration-300" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}>
            <h2 className="text-4xl font-bold mb-8 text-center text-purple-600">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {data.contact.email && (
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-blue-400 text-white">
                    <Mail size={20} />
                  </div>
                  <span className="text-gray-700">{data.contact.email}</span>
                </div>
              )}
              {data.contact.phone && (
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-blue-400 text-white">
                    <Phone size={20} />
                  </div>
                  <span className="text-gray-700">{data.contact.phone}</span>
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-blue-400 text-white">
                    <MapPin size={20} />
                  </div>
                  <span className="text-gray-700">{data.contact.location}</span>
                </div>
              )}
            </div>
            <div className="flex gap-4 justify-center">
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} className="p-4 bg-gradient-to-br from-purple-400 to-blue-400 text-white transform hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </a>
              )}
              {data.contact.github && (
                <a href={data.contact.github} className="p-4 bg-gradient-to-br from-purple-400 to-blue-400 text-white transform hover:scale-110 transition-transform">
                  <Github size={24} />
                </a>
              )}
              {data.contact.twitter && (
                <a href={data.contact.twitter} className="p-4 bg-gradient-to-br from-purple-400 to-blue-400 text-white transform hover:scale-110 transition-transform">
                  <Twitter size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
