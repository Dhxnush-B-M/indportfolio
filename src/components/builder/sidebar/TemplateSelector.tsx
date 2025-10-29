import { Template } from "@/types/portfolio";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TemplateSelectorProps {
  currentTemplate: Template;
  onTemplateChange: (template: Template) => void;
}

const templates = [
  { id: "minimalist" as Template, name: "Minimalist", description: "Clean and simple" },
  { id: "modern" as Template, name: "Modern", description: "Contemporary style" },
  { id: "creative" as Template, name: "Creative", description: "Bold & expressive" },
  { id: "corporate" as Template, name: "Corporate", description: "Professional business" },
  { id: "gradient" as Template, name: "Gradient", description: "Vibrant gradients" },
  { id: "developer" as Template, name: "Developer", description: "Code-inspired" },
  { id: "neuomorphism" as Template, name: "Neuomorphism", description: "Soft 3D effects" },
  { id: "monochrome" as Template, name: "Monochrome", description: "Black & white" },
  { id: "geometric" as Template, name: "Geometric", description: "Shapes & patterns" },
  { id: "github" as Template, name: "GitHub", description: "GitHub profile style" },
  { id: "tech-minimal" as Template, name: "Tech Minimal", description: "Terminal aesthetic" },
  { id: "hacker" as Template, name: "Hacker", description: "Matrix style" },
  { id: "artistic" as Template, name: "Artistic", description: "Colorful & creative" },
  { id: "photography" as Template, name: "Photography", description: "Image-focused" },
  { id: "illustrator" as Template, name: "Illustrator", description: "Playful design" },
  { id: "designer" as Template, name: "Designer", description: "Modern showcase" },
  { id: "executive" as Template, name: "Executive", description: "Luxury professional" },
  { id: "consultant" as Template, name: "Consultant", description: "Business expert" },
];

export const TemplateSelector = ({
  currentTemplate,
  onTemplateChange,
}: TemplateSelectorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Choose Template</h3>
        <p className="text-sm text-muted-foreground">
          Select a template to get started
        </p>
      </div>

      <div className="space-y-3">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={cn(
              "p-4 cursor-pointer transition-all hover:shadow-md",
              currentTemplate === template.id &&
                "border-primary shadow-elegant"
            )}
            onClick={() => onTemplateChange(template.id)}
          >
            <h4 className="font-medium mb-1">{template.name}</h4>
            <p className="text-sm text-muted-foreground">
              {template.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};
