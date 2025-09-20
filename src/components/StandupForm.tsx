'use client';

import { useState } from 'react';
import { StandupEntry, Project } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface StandupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (entry: Partial<StandupEntry>) => void;
  editEntry?: StandupEntry | null;
  projects: Project[];
  currentUser: { id: string; name: string; avatar?: string };
}

export function StandupForm({
  isOpen,
  onClose,
  onSubmit,
  editEntry,
  projects,
  currentUser
}: StandupFormProps) {
  const [formData, setFormData] = useState({
    date: editEntry?.date || new Date().toISOString().split('T')[0],
    yesterday: editEntry?.yesterday || '',
    today: editEntry?.today || '',
    blockers: editEntry?.blockers || '',
    project: editEntry?.project || ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.yesterday.trim()) {
      newErrors.yesterday = 'Yesterday field is required';
    }
    if (!formData.today.trim()) {
      newErrors.today = 'Today field is required';
    }
    if (!formData.project) {
      newErrors.project = 'Project selection is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const entryData: Partial<StandupEntry> = {
      ...formData,
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      updatedAt: new Date().toISOString()
    };

    if (editEntry) {
      entryData.id = editEntry.id;
      entryData.createdAt = editEntry.createdAt;
    } else {
      entryData.id = Date.now().toString();
      entryData.createdAt = new Date().toISOString();
    }

    onSubmit(entryData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      date: new Date().toISOString().split('T')[0],
      yesterday: '',
      today: '',
      blockers: '',
      project: ''
    });
    setErrors({});
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {editEntry ? 'Edit Stand-up Entry' : 'Add Stand-up Entry'}
          </DialogTitle>
          <DialogDescription>
            Share what you accomplished yesterday, what you're working on today, and any blockers.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className={errors.date ? 'border-red-500' : ''}
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="project">Project</Label>
              <Select
                value={formData.project}
                onValueChange={(value) => handleInputChange('project', value)}
              >
                <SelectTrigger className={errors.project ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project.id} value={project.name}>
                      {project.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="yesterday">Yesterday</Label>
            <Textarea
              id="yesterday"
              placeholder="What did you accomplish yesterday?"
              value={formData.yesterday}
              onChange={(e) => handleInputChange('yesterday', e.target.value)}
              className={`min-h-[100px] ${errors.yesterday ? 'border-red-500' : ''}`}
            />
            {errors.yesterday && <p className="text-red-500 text-sm">{errors.yesterday}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="today">Today</Label>
            <Textarea
              id="today"
              placeholder="What are you working on today?"
              value={formData.today}
              onChange={(e) => handleInputChange('today', e.target.value)}
              className={`min-h-[100px] ${errors.today ? 'border-red-500' : ''}`}
            />
            {errors.today && <p className="text-red-500 text-sm">{errors.today}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="blockers">Blockers</Label>
            <Textarea
              id="blockers"
              placeholder="Any blockers or impediments? (Leave empty if none)"
              value={formData.blockers}
              onChange={(e) => handleInputChange('blockers', e.target.value)}
              className="min-h-[80px]"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">
              {editEntry ? 'Update Entry' : 'Add Entry'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
