import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PortfolioData } from "@/types/portfolio";
import { ImageUpload } from "@/components/builder/ImageUpload";

interface HeroEditorProps {
  hero: PortfolioData["hero"];
  onChange: (hero: PortfolioData["hero"]) => void;
}

export const HeroEditor = ({ hero, onChange }: HeroEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Hero Section</h3>
        <p className="text-sm text-muted-foreground">
          Your first impression matters
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={hero.name}
            onChange={(e) => onChange({ ...hero, name: e.target.value })}
            placeholder="Your full name"
          />
        </div>

        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={hero.title}
            onChange={(e) => onChange({ ...hero, title: e.target.value })}
            placeholder="Your professional title"
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={hero.description}
            onChange={(e) => onChange({ ...hero, description: e.target.value })}
            placeholder="Brief description"
            rows={3}
          />
        </div>

        <ImageUpload
          label="Profile Image"
          currentImage={hero.image}
          onImageUploaded={(url) => onChange({ ...hero, image: url })}
          onImageRemoved={() => onChange({ ...hero, image: undefined })}
        />
      </div>
    </div>
  );
};
