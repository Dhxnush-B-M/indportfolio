import { Template } from "@/types/portfolio";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TemplateSelectorProps {
  currentTemplate: Template;
  onTemplateChange: (template: Template) => void;
}

const templates = [
  {
    id: "minimalist" as Template,
    name: "Minimalist",
    description: "Clean and simple design",
  },
  {
    id: "creative" as Template,
    name: "Creative",
    description: "Bold and expressive layout",
  },
  {
    id: "corporate" as Template,
    name: "Corporate",
    description: "Professional business style",
  },
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
