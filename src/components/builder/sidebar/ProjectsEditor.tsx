import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PortfolioData } from "@/types/portfolio";
import { Plus, Trash2 } from "lucide-react";
import { ImageUpload } from "@/components/builder/ImageUpload";

interface ProjectsEditorProps {
  projects: PortfolioData["projects"];
  onChange: (projects: PortfolioData["projects"]) => void;
}

export const ProjectsEditor = ({ projects, onChange }: ProjectsEditorProps) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    tags: [] as string[],
    link: "",
    image: undefined as string | undefined,
  });

  const addProject = () => {
    if (newProject.title && newProject.description) {
      onChange([
        ...projects,
        { ...newProject, id: Date.now().toString(), tags: newProject.tags || [] },
      ]);
      setNewProject({ title: "", description: "", tags: [], link: "", image: undefined });
      setShowAddForm(false);
    }
  };

  const removeProject = (id: string) => {
    onChange(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Projects</h3>
        <p className="text-sm text-muted-foreground">
          Highlight your best work
        </p>
      </div>

      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="p-3 rounded-lg border">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="font-medium text-sm">{project.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-2">
                  {project.description}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeProject(project.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {!showAddForm ? (
        <Button
          onClick={() => setShowAddForm(true)}
          variant="outline"
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      ) : (
        <div className="space-y-3 p-3 rounded-lg border">
          <Label>New Project</Label>
          <Input
            placeholder="Project title"
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
          />
          <Textarea
            placeholder="Project description"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
            rows={3}
          />
          <Input
            placeholder="Project link (optional)"
            value={newProject.link}
            onChange={(e) =>
              setNewProject({ ...newProject, link: e.target.value })
            }
          />
          <ImageUpload
            label="Project Image"
            currentImage={newProject.image}
            onImageUploaded={(url) => setNewProject({ ...newProject, image: url })}
            onImageRemoved={() => setNewProject({ ...newProject, image: undefined })}
          />
          <div className="flex gap-2">
            <Button onClick={addProject} size="sm" className="flex-1">
              Add
            </Button>
            <Button
              onClick={() => setShowAddForm(false)}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
