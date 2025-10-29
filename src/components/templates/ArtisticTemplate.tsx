import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const ArtisticTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-5xl w-full relative z-10">
          {data.hero.image && (
            <img 
              src={data.hero.image} 
              alt={data.hero.name}
              className="w-64 h-64 rounded-full mx-auto mb-8 border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          )}
          <h1 className="text-7xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {data.hero.name}
          </h1>
          <p className="text-3xl text-center text-purple-600 mb-4 font-light italic">{data.hero.title}</p>
          <p className="text-center text-gray-700 max-w-3xl mx-auto text-xl leading-relaxed">{data.hero.description}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              My Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed italic">{data.about.bio}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Creative Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-600">{skill.name}</h3>
                <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600 italic">{skill.category}</span>
                  <span className="text-sm font-semibold text-purple-600">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500"
              >
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 italic">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{
                          background: `linear-gradient(135deg, ${['#ec4899', '#a855f7', '#3b82f6'][i % 3]}, ${['#f472b6', '#c084fc', '#60a5fa'][i % 3]})`,
                          color: 'white'
                        }}
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

      {/* Contact Section */}
      <section className="py-24 px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg p-12 rounded-3xl shadow-2xl">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {data.contact.email && (
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                  <div className="p-3 bg-white rounded-full shadow-lg">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <span className="text-gray-700 font-semibold">{data.contact.email}</span>
                </div>
              )}
              {data.contact.phone && (
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
                  <div className="p-3 bg-white rounded-full shadow-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <span className="text-gray-700 font-semibold">{data.contact.phone}</span>
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-100 to-pink-100 rounded-xl md:col-span-2">
                  <div className="p-3 bg-white rounded-full shadow-lg">
                    <MapPin className="text-pink-600" size={24} />
                  </div>
                  <span className="text-gray-700 font-semibold">{data.contact.location}</span>
                </div>
              )}
            </div>
            <div className="flex gap-6 justify-center">
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} className="p-4 bg-gradient-to-br from-pink-400 to-purple-400 text-white rounded-full shadow-lg transform hover:scale-110 transition-all">
                  <Linkedin size={28} />
                </a>
              )}
              {data.contact.github && (
                <a href={data.contact.github} className="p-4 bg-gradient-to-br from-purple-400 to-blue-400 text-white rounded-full shadow-lg transform hover:scale-110 transition-all">
                  <Github size={28} />
                </a>
              )}
              {data.contact.twitter && (
                <a href={data.contact.twitter} className="p-4 bg-gradient-to-br from-blue-400 to-pink-400 text-white rounded-full shadow-lg transform hover:scale-110 transition-all">
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
