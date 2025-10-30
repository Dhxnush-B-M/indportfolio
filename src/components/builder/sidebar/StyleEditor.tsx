import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PortfolioData } from "@/types/portfolio";
import { Button } from "@/components/ui/button";

interface StyleEditorProps {
  colorTheme: PortfolioData["colorTheme"];
  onChange: (colorTheme: PortfolioData["colorTheme"]) => void;
}

const presetThemes = [
  {
    name: "Purple Magic",
    theme: { primary: "#A78BFA", accent: "#10B981", background: "#FFFFFF", text: "#1F2937" }
  },
  {
    name: "Ocean Blue",
    theme: { primary: "#3B82F6", accent: "#06B6D4", background: "#FFFFFF", text: "#1F2937" }
  },
  {
    name: "Sunset Orange",
    theme: { primary: "#F97316", accent: "#EAB308", background: "#FFFFFF", text: "#1F2937" }
  },
  {
    name: "Forest Green",
    theme: { primary: "#22C55E", accent: "#84CC16", background: "#FFFFFF", text: "#1F2937" }
  },
  {
    name: "Rose Pink",
    theme: { primary: "#EC4899", accent: "#F43F5E", background: "#FFFFFF", text: "#1F2937" }
  },
  {
    name: "Dark Mode",
    theme: { primary: "#A78BFA", accent: "#10B981", background: "#0F172A", text: "#F1F5F9" }
  },
];

export const StyleEditor = ({ colorTheme, onChange }: StyleEditorProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Color Theme</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Customize your portfolio colors
        </p>
      </div>

      {/* Preset Themes */}
      <div className="space-y-3">
        <Label>Quick Presets</Label>
        <div className="grid grid-cols-2 gap-2">
          {presetThemes.map((preset) => (
            <Button
              key={preset.name}
              variant="outline"
              size="sm"
              onClick={() => onChange(preset.theme)}
              className="h-auto flex-col gap-2 py-3"
            >
              <div className="flex gap-1">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: preset.theme.primary }}
                />
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: preset.theme.accent }}
                />
              </div>
              <span className="text-xs">{preset.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="space-y-3">
        <Label>Custom Colors</Label>
        
        <div className="space-y-2">
          <Label htmlFor="primary" className="text-sm">Primary Color</Label>
          <div className="flex gap-2">
            <Input
              id="primary"
              type="color"
              value={colorTheme.primary}
              onChange={(e) => onChange({ ...colorTheme, primary: e.target.value })}
              className="w-16 h-10 p-1 cursor-pointer"
            />
            <Input
              type="text"
              value={colorTheme.primary}
              onChange={(e) => onChange({ ...colorTheme, primary: e.target.value })}
              placeholder="#A78BFA"
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="accent" className="text-sm">Accent Color</Label>
          <div className="flex gap-2">
            <Input
              id="accent"
              type="color"
              value={colorTheme.accent}
              onChange={(e) => onChange({ ...colorTheme, accent: e.target.value })}
              className="w-16 h-10 p-1 cursor-pointer"
            />
            <Input
              type="text"
              value={colorTheme.accent}
              onChange={(e) => onChange({ ...colorTheme, accent: e.target.value })}
              placeholder="#10B981"
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="background" className="text-sm">Background Color</Label>
          <div className="flex gap-2">
            <Input
              id="background"
              type="color"
              value={colorTheme.background}
              onChange={(e) => onChange({ ...colorTheme, background: e.target.value })}
              className="w-16 h-10 p-1 cursor-pointer"
            />
            <Input
              type="text"
              value={colorTheme.background}
              onChange={(e) => onChange({ ...colorTheme, background: e.target.value })}
              placeholder="#FFFFFF"
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="text" className="text-sm">Text Color</Label>
          <div className="flex gap-2">
            <Input
              id="text"
              type="color"
              value={colorTheme.text}
              onChange={(e) => onChange({ ...colorTheme, text: e.target.value })}
              className="w-16 h-10 p-1 cursor-pointer"
            />
            <Input
              type="text"
              value={colorTheme.text}
              onChange={(e) => onChange({ ...colorTheme, text: e.target.value })}
              placeholder="#1F2937"
              className="flex-1"
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="space-y-2">
        <Label>Preview</Label>
        <div
          className="p-6 rounded-lg border-2"
          style={{
            backgroundColor: colorTheme.background,
            borderColor: colorTheme.primary,
            color: colorTheme.text,
          }}
        >
          <h4 className="font-bold text-lg mb-2" style={{ color: colorTheme.primary }}>
            Sample Heading
          </h4>
          <p className="text-sm mb-3">
            This is how your text will look with the selected colors.
          </p>
          <div className="inline-block px-4 py-2 rounded" style={{ backgroundColor: colorTheme.accent, color: colorTheme.background }}>
            Accent Button
          </div>
        </div>
      </div>
    </div>
  );
};