import { PortfolioData } from "@/types/portfolio";
import { MinimalistTemplate } from "@/components/templates/MinimalistTemplate";
import { CreativeTemplate } from "@/components/templates/CreativeTemplate";
import { CorporateTemplate } from "@/components/templates/CorporateTemplate";
import { ModernTemplate } from "@/components/templates/ModernTemplate";
import { GradientTemplate } from "@/components/templates/GradientTemplate";
import { DeveloperTemplate } from "@/components/templates/DeveloperTemplate";
import { NeuomorphismTemplate } from "@/components/templates/NeuomorphismTemplate";
import { MonochromeTemplate } from "@/components/templates/MonochromeTemplate";
import { GeometricTemplate } from "@/components/templates/GeometricTemplate";
import { GitHubTemplate } from "@/components/templates/GitHubTemplate";
import { TechMinimalTemplate } from "@/components/templates/TechMinimalTemplate";
import { HackerTemplate } from "@/components/templates/HackerTemplate";
import { ArtisticTemplate } from "@/components/templates/ArtisticTemplate";
import { PhotographyTemplate } from "@/components/templates/PhotographyTemplate";
import { IllustratorTemplate } from "@/components/templates/IllustratorTemplate";
import { DesignerTemplate } from "@/components/templates/DesignerTemplate";
import { ExecutiveTemplate } from "@/components/templates/ExecutiveTemplate";
import { ConsultantTemplate } from "@/components/templates/ConsultantTemplate";

interface PortfolioPreviewProps {
  portfolioData: PortfolioData;
}

export const PortfolioPreview = ({ portfolioData }: PortfolioPreviewProps) => {
  const renderTemplate = () => {
    switch (portfolioData.template) {
      case "minimalist": return <MinimalistTemplate data={portfolioData} />;
      case "creative": return <CreativeTemplate data={portfolioData} />;
      case "corporate": return <CorporateTemplate data={portfolioData} />;
      case "modern": return <ModernTemplate data={portfolioData} />;
      case "gradient": return <GradientTemplate data={portfolioData} />;
      case "developer": return <DeveloperTemplate data={portfolioData} />;
      case "neuomorphism": return <NeuomorphismTemplate data={portfolioData} />;
      case "monochrome": return <MonochromeTemplate data={portfolioData} />;
      case "geometric": return <GeometricTemplate data={portfolioData} />;
      case "github": return <GitHubTemplate data={portfolioData} />;
      case "tech-minimal": return <TechMinimalTemplate data={portfolioData} />;
      case "hacker": return <HackerTemplate data={portfolioData} />;
      case "artistic": return <ArtisticTemplate data={portfolioData} />;
      case "photography": return <PhotographyTemplate data={portfolioData} />;
      case "illustrator": return <IllustratorTemplate data={portfolioData} />;
      case "designer": return <DesignerTemplate data={portfolioData} />;
      case "executive": return <ExecutiveTemplate data={portfolioData} />;
      case "consultant": return <ConsultantTemplate data={portfolioData} />;
      default: return <MinimalistTemplate data={portfolioData} />;
    }
  };

  return (
    <main className="flex-1 overflow-auto bg-muted/30">
      <div className="mx-auto min-h-full">
        {renderTemplate()}
      </div>
    </main>
  );
};
