import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PortfolioData, defaultPortfolioData } from "@/types/portfolio";
import { BuilderSidebar } from "@/components/builder/BuilderSidebar";
import { PortfolioPreview } from "@/components/builder/PortfolioPreview";
import { BuilderHeader } from "@/components/builder/BuilderHeader";
import { usePortfolio } from "@/hooks/usePortfolio";
import { useDebounce } from "@/hooks/use-debounce";

const Builder = () => {
  const { id } = useParams();
  const { portfolios, updatePortfolio, createPortfolio, saving } = usePortfolio();
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);
  const [portfolioName, setPortfolioName] = useState("My Portfolio");
  const [portfolioId, setPortfolioId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("template");
  const debouncedData = useDebounce(portfolioData, 2000);

  // Load portfolio if ID exists
  useEffect(() => {
    if (id && portfolios.length > 0) {
      const portfolio = portfolios.find(p => p.id === id);
      if (portfolio) {
        setPortfolioData(portfolio.data);
        setPortfolioName(portfolio.name);
        setPortfolioId(portfolio.id);
      }
    } else if (!id && portfolios.length === 0) {
      // Create new portfolio if none exists
      createPortfolio(portfolioName, portfolioData).then((newPortfolio) => {
        if (newPortfolio) {
          setPortfolioId(newPortfolio.id);
        }
      });
    }
  }, [id, portfolios]);

  // Auto-save
  useEffect(() => {
    if (portfolioId && debouncedData) {
      updatePortfolio(portfolioId, { 
        data: debouncedData,
        template: debouncedData.template,
      });
    }
  }, [debouncedData, portfolioId]);

  const handleSave = () => {
    if (portfolioId) {
      updatePortfolio(portfolioId, { 
        data: portfolioData,
        name: portfolioName,
        template: portfolioData.template,
      });
    }
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <BuilderHeader 
        portfolioData={portfolioData}
        portfolioName={portfolioName}
        onNameChange={setPortfolioName}
        onSave={handleSave}
        saving={saving}
        onExport={() => {
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
