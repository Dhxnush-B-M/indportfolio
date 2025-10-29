import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Briefcase } from "lucide-react";

export const ConsultantTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">{data.hero.name}</h1>
              <p className="text-3xl text-blue-200 mb-6">{data.hero.title}</p>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">{data.hero.description}</p>
              {data.lookingForWork && (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Briefcase size={20} />
                  <span className="font-semibold">Available for Consulting</span>
                </div>
              )}
            </div>
            {data.hero.image && (
              <img 
                src={data.hero.image} 
                alt={data.hero.name}
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-blue-900">About Me</h2>
          <p className="text-2xl text-gray-700 leading-relaxed">{data.about.bio}</p>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-blue-900">Services & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-white border-2 border-blue-100 rounded-lg p-8 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">{skill.name}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-3">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies/Projects Section */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-blue-900">Case Studies</h2>
          <div className="space-y-16">
            {data.projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                  )}
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 text-blue-900">{project.title}</h3>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
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
          <h2 className="text-5xl font-bold mb-16 text-center text-blue-900">Get In Touch</h2>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {data.contact.email && (
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Email</div>
                    <div className="text-lg font-semibold">{data.contact.email}</div>
                  </div>
                </div>
              )}
              {data.contact.phone && (
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Phone</div>
                    <div className="text-lg font-semibold">{data.contact.phone}</div>
                  </div>
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-4 md:col-span-2">
                  <div className="p-4 bg-white/20 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Location</div>
                    <div className="text-lg font-semibold">{data.contact.location}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-6 justify-center pt-8 border-t border-white/20">
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
