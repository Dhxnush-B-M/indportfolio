import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles, Layout, Palette, Rocket, Code, Download } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
            <Sparkles className="h-4 w-4" />
            Build Your Professional Portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
            Create Stunning
            <br />
            <span className="text-gradient">Portfolio Websites</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
            No coding required. Choose from professional templates, customize with ease, and export your portfolio in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="gradient-primary text-lg px-8 py-6 shadow-glow"
              onClick={() => navigate("/builder")}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Building Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
            >
              View Examples
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to Stand Out
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Templates</h3>
              <p className="text-muted-foreground">
                Choose from minimalist, creative, or corporate designs. All templates are fully responsive and modern.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Customization</h3>
              <p className="text-muted-foreground">
                Live preview, color themes, and intuitive editing. Make it yours without touching a line of code.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-all">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Export & Deploy</h3>
              <p className="text-muted-foreground">
                Download as HTML/CSS or get a shareable link. Your portfolio, ready to launch anywhere.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Build Your Portfolio in 4 Simple Steps
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Template",
                  description: "Pick from our curated collection of professional designs",
                },
                {
                  step: "2",
                  title: "Add Your Content",
                  description: "Fill in your information, projects, and skills with our intuitive editor",
                },
                {
                  step: "3",
                  title: "Customize Design",
                  description: "Adjust colors, fonts, and layouts to match your personal brand",
                },
                {
                  step: "4",
                  title: "Export & Share",
                  description: "Download your portfolio or get a shareable link instantly",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="p-12 text-center gradient-primary text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals showcasing their work online
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6"
            onClick={() => navigate("/builder")}
          >
            <Code className="mr-2 h-5 w-5" />
            Get Started Now - It's Free
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Portfolio Builder. Create professional portfolios in minutes.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
