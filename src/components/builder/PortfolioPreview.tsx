import { PortfolioData } from "@/types/portfolio";
import { MinimalistTemplate } from "@/components/templates/MinimalistTemplate";
import { CreativeTemplate } from "@/components/templates/CreativeTemplate";
import { CorporateTemplate } from "@/components/templates/CorporateTemplate";

interface PortfolioPreviewProps {
  portfolioData: PortfolioData;
}

export const PortfolioPreview = ({ portfolioData }: PortfolioPreviewProps) => {
  const renderTemplate = () => {
    switch (portfolioData.template) {
      case "minimalist":
        return <MinimalistTemplate data={portfolioData} />;
      case "creative":
        return <CreativeTemplate data={portfolioData} />;
      case "corporate":
        return <CorporateTemplate data={portfolioData} />;
      default:
        return <MinimalistTemplate data={portfolioData} />;
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
