import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const NeuomorphismTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-[#e0e5ec] p-8">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <div className="bg-[#e0e5ec] rounded-3xl p-12 shadow-[9px_9px_16px_#b8bdc4,-9px_-9px_16px_#ffffff]">
          {data.hero.image && (
            <img 
              src={data.hero.image} 
              alt={data.hero.name}
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-[inset_5px_5px_10px_#b8bdc4,inset_-5px_-5px_10px_#ffffff]"
            />
          )}
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">{data.hero.name}</h1>
          <p className="text-xl text-center text-gray-600 mb-2">{data.hero.title}</p>
          <p className="text-center text-gray-500 max-w-2xl mx-auto">{data.hero.description}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">About Me</h2>
        <div className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[9px_9px_16px_#b8bdc4,-9px_-9px_16px_#ffffff]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {data.about.image && (
              <img
                src={data.about.image}
                alt="About"
                className="rounded-2xl shadow-[inset_3px_3px_6px_#b8bdc4,inset_-3px_-3px_6px_#ffffff]"
              />
            )}
            <p className="text-gray-700 leading-relaxed">{data.about.bio}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.skills.map((skill, index) => (
            <div key={index} className="bg-[#e0e5ec] rounded-2xl p-6 shadow-[9px_9px_16px_#b8bdc4,-9px_-9px_16px_#ffffff]">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-3 bg-[#e0e5ec] rounded-full shadow-[inset_3px_3px_6px_#b8bdc4,inset_-3px_-3px_6px_#ffffff] overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <div key={project.id} className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[9px_9px_16px_#b8bdc4,-9px_-9px_16px_#ffffff]">
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-2xl mb-4 shadow-[inset_3px_3px_6px_#b8bdc4,inset_-3px_-3px_6px_#ffffff]"
                />
              )}
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#e0e5ec] rounded-full text-sm text-gray-700 shadow-[3px_3px_6px_#b8bdc4,-3px_-3px_6px_#ffffff]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Get In Touch</h2>
        <div className="bg-[#e0e5ec] rounded-3xl p-8 shadow-[9px_9px_16px_#b8bdc4,-9px_-9px_16px_#ffffff]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.contact.email && (
              <div className="flex items-center gap-3">
                <Mail className="text-gray-600" />
                <span className="text-gray-700">{data.contact.email}</span>
              </div>
            )}
            {data.contact.phone && (
              <div className="flex items-center gap-3">
                <Phone className="text-gray-600" />
                <span className="text-gray-700">{data.contact.phone}</span>
              </div>
            )}
            {data.contact.location && (
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-600" />
                <span className="text-gray-700">{data.contact.location}</span>
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-6 justify-center">
            {data.contact.linkedin && (
              <a href={data.contact.linkedin} className="p-3 bg-[#e0e5ec] rounded-full shadow-[5px_5px_10px_#b8bdc4,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8bdc4,inset_-5px_-5px_10px_#ffffff] transition-all">
                <Linkedin className="text-gray-700" />
              </a>
            )}
            {data.contact.github && (
              <a href={data.contact.github} className="p-3 bg-[#e0e5ec] rounded-full shadow-[5px_5px_10px_#b8bdc4,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8bdc4,inset_-5px_-5px_10px_#ffffff] transition-all">
                <Github className="text-gray-700" />
              </a>
            )}
            {data.contact.twitter && (
              <a href={data.contact.twitter} className="p-3 bg-[#e0e5ec] rounded-full shadow-[5px_5px_10px_#b8bdc4,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8bdc4,inset_-5px_-5px_10px_#ffffff] transition-all">
                <Twitter className="text-gray-700" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
