import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PortfolioData } from "@/types/portfolio";

interface ContactEditorProps {
  contact: PortfolioData["contact"];
  lookingForWork: boolean;
  onChange: (contact: PortfolioData["contact"], lookingForWork: boolean) => void;
}

export const ContactEditor = ({
  contact,
  lookingForWork,
  onChange,
}: ContactEditorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Contact Information</h3>
        <p className="text-sm text-muted-foreground">
          How people can reach you
        </p>
      </div>

      <div className="flex items-center justify-between p-3 rounded-lg border">
        <div>
          <Label htmlFor="looking-for-work">Looking for Work</Label>
          <p className="text-xs text-muted-foreground">
            Display availability banner
          </p>
        </div>
        <Switch
          id="looking-for-work"
          checked={lookingForWork}
          onCheckedChange={(checked) => onChange(contact, checked)}
        />
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={contact.email}
            onChange={(e) =>
              onChange({ ...contact, email: e.target.value }, lookingForWork)
            }
            placeholder="your@email.com"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input
            id="phone"
            value={contact.phone || ""}
            onChange={(e) =>
              onChange({ ...contact, phone: e.target.value }, lookingForWork)
            }
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <Label htmlFor="location">Location (Optional)</Label>
          <Input
            id="location"
            value={contact.location || ""}
            onChange={(e) =>
              onChange({ ...contact, location: e.target.value }, lookingForWork)
            }
            placeholder="City, Country"
          />
        </div>

        <div>
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            value={contact.linkedin || ""}
            onChange={(e) =>
              onChange({ ...contact, linkedin: e.target.value }, lookingForWork)
            }
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div>
          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            value={contact.github || ""}
            onChange={(e) =>
              onChange({ ...contact, github: e.target.value }, lookingForWork)
            }
            placeholder="https://github.com/yourusername"
          />
        </div>
      </div>
    </div>
  );
};
