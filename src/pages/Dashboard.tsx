import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { usePortfolio } from "@/hooks/usePortfolio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, LogOut, Edit, Trash2, Eye, EyeOff, Palette } from "lucide-react";
import { defaultPortfolioData } from "@/types/portfolio";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { portfolios, loading, createPortfolio, deletePortfolio, publishPortfolio } = usePortfolio();
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);

  const handleCreateNew = async () => {
    setCreating(true);
    const portfolio = await createPortfolio("My Portfolio", defaultPortfolioData);
    setCreating(false);
    if (portfolio) {
      navigate(`/builder/${portfolio.id}`);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-gradient">Portfolio Builder</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" onClick={handleSignOut} className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">My Portfolios</h2>
            <p className="text-muted-foreground">
              Create and manage your portfolio websites
            </p>
          </div>
          <Button onClick={handleCreateNew} disabled={creating} className="gap-2 gradient-primary shadow-elegant">
            <Plus className="h-4 w-4" />
            {creating ? "Creating..." : "New Portfolio"}
          </Button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2 mt-2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-muted rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : portfolios.length === 0 ? (
          <Card className="text-center py-12 animate-fade-in">
            <CardContent>
              <Palette className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No portfolios yet</h3>
              <p className="text-muted-foreground mb-6">
                Create your first portfolio to get started
              </p>
              <Button onClick={handleCreateNew} disabled={creating} className="gap-2 gradient-primary">
                <Plus className="h-4 w-4" />
                {creating ? "Creating..." : "Create Portfolio"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((portfolio) => (
              <Card key={portfolio.id} className="group hover:shadow-elegant transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="truncate">{portfolio.name}</span>
                    {portfolio.is_published && (
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        Live
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {portfolio.template} template
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <Palette className="h-12 w-12" />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={() => navigate(`/builder/${portfolio.id}`)}
                      className="flex-1 gap-2"
                      variant="default"
                    >
                      <Edit className="h-4 w-4" />
                      Edit
                    </Button>
                    
                    <Button
                      onClick={() => publishPortfolio(portfolio.id, !portfolio.is_published)}
                      variant="outline"
                      className="gap-2"
                    >
                      {portfolio.is_published ? (
                        <>
                          <EyeOff className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Portfolio</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deletePortfolio(portfolio.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
