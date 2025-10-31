import { PortfolioData } from "@/types/portfolio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TemplateSelector } from "./sidebar/TemplateSelector";
import { HeroEditor } from "./sidebar/HeroEditor";
import { AboutEditor } from "./sidebar/AboutEditor";
import { SkillsEditor } from "./sidebar/SkillsEditor";
import { ProjectsEditor } from "./sidebar/ProjectsEditor";
import { ContactEditor } from "./sidebar/ContactEditor";
import { StyleEditor } from "./sidebar/StyleEditor";
import { Layout, User, Code, Briefcase, Mail } from "lucide-react";

interface BuilderSidebarProps {
  portfolioData: PortfolioData;
  setPortfolioData: (data: PortfolioData) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const BuilderSidebar = ({
  portfolioData,
  setPortfolioData,
  activeSection,
  setActiveSection,
}: BuilderSidebarProps) => {
  return (
    <aside className="w-80 border-r bg-card/80 backdrop-blur-sm overflow-y-auto shadow-lg">
      <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-auto p-2 m-2 bg-muted/50">
          <TabsTrigger value="template" className="flex flex-col gap-1 py-3 data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">
            <Layout className="h-5 w-5" />
            <span className="text-xs font-medium">Template</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex flex-col gap-1 py-3 data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">
            <User className="h-5 w-5" />
            <span className="text-xs font-medium">Content</span>
          </TabsTrigger>
          <TabsTrigger value="style" className="flex flex-col gap-1 py-3 data-[state=active]:bg-background data-[state=active]:shadow-md transition-all">
            <Code className="h-5 w-5" />
            <span className="text-xs font-medium">Style</span>
          </TabsTrigger>
        </TabsList>

        <div className="p-4">
          <TabsContent value="template" className="mt-0 space-y-4">
            <TemplateSelector
              currentTemplate={portfolioData.template}
              onTemplateChange={(template) =>
                setPortfolioData({ ...portfolioData, template })
              }
            />
          </TabsContent>

          <TabsContent value="content" className="mt-0 space-y-6">
            <HeroEditor
              hero={portfolioData.hero}
              onChange={(hero) => setPortfolioData({ ...portfolioData, hero })}
            />
            
            <AboutEditor
              about={portfolioData.about}
              onChange={(about) => setPortfolioData({ ...portfolioData, about })}
            />
            
            <SkillsEditor
              skills={portfolioData.skills}
              onChange={(skills) => setPortfolioData({ ...portfolioData, skills })}
            />
            
            <ProjectsEditor
              projects={portfolioData.projects}
              onChange={(projects) => setPortfolioData({ ...portfolioData, projects })}
            />
            
            <ContactEditor
              contact={portfolioData.contact}
              lookingForWork={portfolioData.lookingForWork}
              onChange={(contact, lookingForWork) =>
                setPortfolioData({ ...portfolioData, contact, lookingForWork })
              }
            />
          </TabsContent>

          <TabsContent value="style" className="mt-0">
            <StyleEditor
              colorTheme={portfolioData.colorTheme}
              onChange={(colorTheme) =>
                setPortfolioData({ ...portfolioData, colorTheme })
              }
            />
          </TabsContent>
        </div>
      </Tabs>
    </aside>
  );
};
