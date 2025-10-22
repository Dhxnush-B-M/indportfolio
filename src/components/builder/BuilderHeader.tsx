import { Button } from "@/components/ui/button";
import { Moon, Sun, Download, Save } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { PortfolioData } from "@/types/portfolio";

interface BuilderHeaderProps {
  portfolioData: PortfolioData;
  onExport: () => void;
}

export const BuilderHeader = ({ portfolioData, onExport }: BuilderHeaderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gradient">Portfolio Builder</h1>
          <p className="text-sm text-muted-foreground">Create your stunning portfolio in minutes</p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button variant="outline" className="gap-2">
            <Save className="h-4 w-4" />
            Save
          </Button>

          <Button onClick={onExport} className="gap-2 gradient-primary">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
    </header>
  );
};
