import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PortfolioData } from "@/types/portfolio";
import { Plus, Trash2 } from "lucide-react";

interface SkillsEditorProps {
  skills: PortfolioData["skills"];
  onChange: (skills: PortfolioData["skills"]) => void;
}

export const SkillsEditor = ({ skills, onChange }: SkillsEditorProps) => {
  const [newSkill, setNewSkill] = useState({ name: "", level: 50, category: "" });

  const addSkill = () => {
    if (newSkill.name && newSkill.category) {
      onChange([...skills, newSkill]);
      setNewSkill({ name: "", level: 50, category: "" });
    }
  };

  const removeSkill = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Skills</h3>
        <p className="text-sm text-muted-foreground">
          Showcase your expertise
        </p>
      </div>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 p-3 rounded-lg border">
            <div className="flex-1">
              <div className="font-medium text-sm">{skill.name}</div>
              <div className="text-xs text-muted-foreground">{skill.category}</div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeSkill(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-3 p-3 rounded-lg border">
        <Label>Add New Skill</Label>
        <Input
          placeholder="Skill name"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
        />
        <Input
          placeholder="Category"
          value={newSkill.category}
          onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
        />
        <Button onClick={addSkill} className="w-full" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Skill
        </Button>
      </div>
    </div>
  );
};
