import { PortfolioData } from "@/types/portfolio";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export const HackerTemplate = ({ data }: { data: PortfolioData }) => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative">
        <div className="max-w-4xl w-full relative z-10">
          <div className="border border-green-400 p-8 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="text-sm mb-4">
              <span className="text-green-600">root@portfolio:~$</span> <span className="animate-pulse">_</span>
            </div>
            {data.hero.image && (
              <img 
                src={data.hero.image} 
                alt={data.hero.name}
                className="w-32 h-32 border-2 border-green-400 mx-auto mb-6 shadow-[0_0_15px_rgba(34,197,94,0.5)] filter saturate-150"
              />
            )}
            <pre className="text-sm mb-4 text-green-500">
{`
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
`}
            </pre>
            <h1 className="text-4xl font-bold mb-4">&gt; {data.hero.name}</h1>
            <p className="text-xl text-green-500 mb-2">[{data.hero.title}]</p>
            <p className="text-green-600"># {data.hero.description}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border border-green-400 p-8 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="text-sm mb-4 text-green-600">
              root@portfolio:~$ cat about.txt
            </div>
            <p className="text-green-400 leading-relaxed whitespace-pre-wrap">{data.about.bio}</p>
            <div className="text-sm mt-4 text-green-600">
              root@portfolio:~$ <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border border-green-400 p-8 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="text-sm mb-6 text-green-600">
              root@portfolio:~$ ./list_skills.sh
            </div>
            <div className="space-y-4">
              {data.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400">[{skill.name}]</span>
                    <span className="text-green-600">{skill.level}%</span>
                  </div>
                  <div className="flex gap-1 h-2">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div 
                        key={i}
                        className={`flex-1 ${i < skill.level / 5 ? 'bg-green-400 shadow-[0_0_5px_rgba(34,197,94,0.8)]' : 'bg-gray-800'}`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-green-700 mt-1">// {skill.category}</div>
                </div>
              ))}
            </div>
            <div className="text-sm mt-4 text-green-600">
              root@portfolio:~$ <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="border border-green-400 p-8 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="text-sm mb-6 text-green-600">
              root@portfolio:~$ ls -la ./projects/
            </div>
            <div className="space-y-6">
              {data.projects.map((project) => (
                <div key={project.id} className="border border-green-600 p-6">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover border border-green-500 mb-4 filter saturate-150"
                    />
                  )}
                  <div className="text-sm mb-2 text-green-600">
                    drwxr-xr-x 1 root root 4096 {new Date().toLocaleDateString()}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-green-400">&gt;&gt; {project.title}</h3>
                  <p className="text-green-500 mb-4"># {project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 border border-green-400 text-sm text-green-400">
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-sm mt-4 text-green-600">
              root@portfolio:~$ <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border border-green-400 p-8 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <div className="text-sm mb-6 text-green-600">
              root@portfolio:~$ cat contact.dat
            </div>
            <div className="space-y-3 mb-8">
              {data.contact.email && (
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-green-600" />
                  <span className="text-green-400">{data.contact.email}</span>
                </div>
              )}
              {data.contact.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-green-600" />
                  <span className="text-green-400">{data.contact.phone}</span>
                </div>
              )}
              {data.contact.location && (
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-green-600" />
                  <span className="text-green-400">{data.contact.location}</span>
                </div>
              )}
            </div>
            <div className="flex gap-4">
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} className="p-3 border border-green-400 hover:bg-green-400 hover:text-black transition-all">
                  <Linkedin size={20} />
                </a>
              )}
              {data.contact.github && (
                <a href={data.contact.github} className="p-3 border border-green-400 hover:bg-green-400 hover:text-black transition-all">
                  <Github size={20} />
                </a>
              )}
              {data.contact.twitter && (
                <a href={data.contact.twitter} className="p-3 border border-green-400 hover:bg-green-400 hover:text-black transition-all">
                  <Twitter size={20} />
                </a>
              )}
            </div>
            <div className="text-sm mt-6 text-green-600">
              root@portfolio:~$ <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
