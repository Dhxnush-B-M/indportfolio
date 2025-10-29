import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const PhotographyTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Fullscreen */}
      <section className="h-screen relative flex items-center justify-center">
        {data.hero.image && (
          <div className="absolute inset-0">
            <img 
              src={data.hero.image} 
              alt={data.hero.name}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
          </div>
        )}
        <div className="relative z-10 text-center">
          <h1 className="text-8xl font-light mb-4 tracking-wide">{data.hero.name}</h1>
          <p className="text-2xl text-gray-300 mb-2 font-light tracking-widest uppercase">{data.hero.title}</p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{data.hero.description}</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-8">
        <h2 className="text-5xl font-light mb-16 text-center tracking-wider">Portfolio</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.projects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden aspect-video">
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-3xl font-light mb-3">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-12 tracking-wider">About</h2>
          <p className="text-xl text-gray-300 leading-relaxed font-light">{data.about.bio}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-12 tracking-wider">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {data.contact.email && (
              <div>
                <Mail className="mx-auto mb-4 text-gray-400" size={32} />
                <p className="text-gray-300">{data.contact.email}</p>
              </div>
            )}
            {data.contact.phone && (
              <div>
                <Phone className="mx-auto mb-4 text-gray-400" size={32} />
                <p className="text-gray-300">{data.contact.phone}</p>
              </div>
            )}
            {data.contact.location && (
              <div>
                <MapPin className="mx-auto mb-4 text-gray-400" size={32} />
                <p className="text-gray-300">{data.contact.location}</p>
              </div>
            )}
          </div>
          <div className="flex gap-6 justify-center">
            {data.contact.linkedin && (
              <a href={data.contact.linkedin} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={28} />
              </a>
            )}
            {data.contact.github && (
              <a href={data.contact.github} className="text-gray-400 hover:text-white transition-colors">
                <Github size={28} />
              </a>
            )}
            {data.contact.twitter && (
              <a href={data.contact.twitter} className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={28} />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
