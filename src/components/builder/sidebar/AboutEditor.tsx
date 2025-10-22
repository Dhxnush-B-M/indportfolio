import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PortfolioData } from "@/types/portfolio";

interface AboutEditorProps {
  about: PortfolioData["about"];
  onChange: (about: PortfolioData["about"]) => void;
}

export const AboutEditor = ({ about, onChange }: AboutEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">About Section</h3>
        <p className="text-sm text-muted-foreground">
          Tell your story
        </p>
      </div>

      <div>
        <Label htmlFor="bio">Biography</Label>
        <Textarea
          id="bio"
          value={about.bio}
          onChange={(e) => onChange({ ...about, bio: e.target.value })}
          placeholder="Tell people about yourself"
          rows={6}
        />
      </div>
    </div>
  );
};
