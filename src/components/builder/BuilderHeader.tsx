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
    <header className="border-b bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div>
            <h1 
              className="text-2xl font-bold text-gradient cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              Portfolio Builder
            </h1>
            <p className="text-sm text-muted-foreground">Create your stunning portfolio</p>
          </div>
          <div className="flex items-center gap-2">
            <Input
              value={portfolioName}
              onChange={(e) => onNameChange(e.target.value)}
              className="max-w-xs"
              placeholder="Portfolio name"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden md:block">{user?.email}</span>
          
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

          <Button 
            variant="outline" 
            className="gap-2"
            onClick={onSave}
            disabled={saving}
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Save"}
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
