import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, Sun, Download, Save } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useAuth } from "@/hooks/useAuth";
import { PortfolioData } from "@/types/portfolio";
import { useNavigate } from "react-router-dom";

interface BuilderHeaderProps {
  portfolioData: PortfolioData;
  portfolioName: string;
  onNameChange: (name: string) => void;
  onSave: () => void;
  saving: boolean;
  onExport: () => void;
}

export const BuilderHeader = ({ 
  portfolioData, 
  portfolioName, 
  onNameChange, 
  onSave, 
  saving, 
  onExport 
}: BuilderHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="border-b bg-card/80 backdrop-blur-sm px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 flex-1">
          <div>
            <h1 
              className="text-2xl font-bold text-gradient cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/dashboard")}
            >
              Portfolio Builder
            </h1>
            <p className="text-sm text-muted-foreground">Create stunning portfolios in minutes</p>
          </div>
          <div className="flex items-center gap-2">
            <Input
              value={portfolioName}
              onChange={(e) => onNameChange(e.target.value)}
              className="max-w-xs border-primary/20 focus:border-primary transition-colors"
              placeholder="Portfolio name"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden md:block font-medium">{user?.email}</span>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:shadow-md transition-all hover-lift"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button 
            variant="outline" 
            className="gap-2 hover:shadow-md transition-all hover-lift"
            onClick={onSave}
            disabled={saving}
          >
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">{saving ? "Saving..." : "Save"}</span>
          </Button>

          <Button onClick={onExport} className="gap-2 gradient-primary shadow-elegant hover:shadow-glow transition-all hover-lift">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
