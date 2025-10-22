import { useState } from "react";
import { PortfolioData, defaultPortfolioData } from "@/types/portfolio";
import { BuilderSidebar } from "@/components/builder/BuilderSidebar";
import { PortfolioPreview } from "@/components/builder/PortfolioPreview";
import { BuilderHeader } from "@/components/builder/BuilderHeader";

const Builder = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);
  const [activeSection, setActiveSection] = useState<string>("template");

  return (
    <div className="flex h-screen flex-col bg-background">
      <BuilderHeader 
        portfolioData={portfolioData} 
        onExport={() => {
          // Export functionality will be implemented
          console.log("Exporting portfolio...");
        }}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <BuilderSidebar
          portfolioData={portfolioData}
          setPortfolioData={setPortfolioData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        <PortfolioPreview portfolioData={portfolioData} />
      </div>
    </div>
  );
};

export default Builder;
