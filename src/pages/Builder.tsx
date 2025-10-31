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
  const [manualSaving, setManualSaving] = useState(false);
  const debouncedData = useDebounce(portfolioData, 3000);

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

  // Auto-save (silent)
  useEffect(() => {
    if (portfolioId && debouncedData) {
      updatePortfolio(portfolioId, { 
        data: debouncedData,
        template: debouncedData.template,
      }, true); // silent save
    }
  }, [debouncedData, portfolioId]);

  const handleSave = async () => {
    if (portfolioId) {
      setManualSaving(true);
      await updatePortfolio(portfolioId, { 
        data: portfolioData,
        name: portfolioName,
        template: portfolioData.template,
      });
      setManualSaving(false);
    }
  };

  const handleExport = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${portfolioData.hero.name} - Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="portfolio">
    ${document.querySelector('.mx-auto.min-h-full')?.innerHTML || ''}
  </div>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioName.replace(/\s+/g, '-').toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <BuilderHeader 
        portfolioData={portfolioData}
        portfolioName={portfolioName}
        onNameChange={setPortfolioName}
        onSave={handleSave}
        saving={manualSaving}
        onExport={handleExport}
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
