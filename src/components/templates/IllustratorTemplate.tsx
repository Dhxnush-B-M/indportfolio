import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Palette } from "lucide-react";

export const IllustratorTemplate = ({ data }: { data: PortfolioData }) => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300 transform rotate-45 opacity-50"></div>
        
        <div className="max-w-4xl w-full relative z-10 text-center">
          {data.hero.image && (
            <div className="w-64 h-64 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full transform rotate-12"></div>
              <img 
                src={data.hero.image} 
                alt={data.hero.name}
                className="w-full h-full object-cover rounded-full relative z-10 border-8 border-white shadow-2xl"
              />
            </div>
          )}
          <Palette className="mx-auto mb-6 text-pink-500" size={48} />
          <h1 className="text-7xl font-bold mb-6" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            <span className="text-yellow-500">{data.hero.name.split(' ')[0]}</span>
            {' '}
            <span className="text-pink-500">{data.hero.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-3xl text-purple-600 mb-4 font-bold">{data.hero.title}</p>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">{data.hero.description}</p>
        </div>
      </section>

      {/* Skills Section - Colorful Pills */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-center text-purple-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            My Superpowers
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {data.skills.map((skill, index) => (
              <div 
                key={index}
                className="px-8 py-4 rounded-full text-white text-xl font-bold shadow-lg transform hover:scale-110 transition-all"
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                {skill.name} ★ {skill.level}%
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Playful Grid */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-16 text-center text-pink-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            My Creations ✨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl transform hover:-rotate-2 hover:scale-105 transition-all duration-300"
                style={{ borderTop: `8px solid ${colors[index % colors.length]}` }}
              >
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: colors[index % colors.length] }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: colors[(index + i) % colors.length] }}
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

      {/* About Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-12 text-center text-yellow-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            About Me 🎨
          </h2>
          <p className="text-2xl text-gray-700 leading-relaxed text-center">{data.about.bio}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-6xl font-bold mb-12 text-center text-purple-600" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Let's Chat! 💬
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {data.contact.email && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400 flex items-center justify-center">
                    <Mail className="text-white" size={28} />
                  </div>
                  <p className="text-gray-700 font-semibold">{data.contact.email}</p>
                </div>
              )}
              {data.contact.phone && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-400 flex items-center justify-center">
                    <Phone className="text-white" size={28} />
                  </div>
                  <p className="text-gray-700 font-semibold">{data.contact.phone}</p>
                </div>
              )}
              {data.contact.location && (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-400 flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <p className="text-gray-700 font-semibold">{data.contact.location}</p>
                </div>
              )}
            </div>
            <div className="flex gap-6 justify-center">
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-pink-400 flex items-center justify-center text-white transform hover:scale-110 transition-all">
                  <Linkedin size={28} />
                </a>
              )}
              {data.contact.github && (
                <a href={data.contact.github} className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white transform hover:scale-110 transition-all">
                  <Github size={28} />
                </a>
              )}
              {data.contact.twitter && (
                <a href={data.contact.twitter} className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-yellow-400 flex items-center justify-center text-white transform hover:scale-110 transition-all">
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
