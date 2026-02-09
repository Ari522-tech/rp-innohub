import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; // We will create this simple component below
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Upload, Save } from 'lucide-react';

const AddProject = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-10">
      
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Add New Innovation</h1>
        <Button variant="outline" className="border-slate-300 text-slate-600">Cancel</Button>
      </div>

      <Card className="bg-white shadow-xl border-t-4 border-t-rp-blue">
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>Share your innovation with the world.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Project Title</Label>
              <Input placeholder="e.g. Smart Irrigation System" />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="bg-white border-slate-300">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description</Label>
            <textarea 
              className="flex min-h-[120px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rp-blue disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Describe the problem your project solves..."
            />
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <Label>Technologies Used</Label>
            <Input placeholder="e.g. React, IoT, Python (Comma separated)" />
          </div>

          {/* Image Upload Mockup */}
          <div className="space-y-2">
            <Label>Project Image / Thumbnail</Label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer">
              <div className="bg-slate-100 p-3 rounded-full mb-3">
                <Upload className="h-6 w-6 text-slate-500" />
              </div>
              <p className="text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
              <p className="text-xs text-slate-400 mt-1">SVG, PNG, JPG or GIF (max. 3MB)</p>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-4">
            <Button variant="ghost" className="text-slate-600">Save as Draft</Button>
            <Button className="bg-rp-blue hover:bg-blue-900 text-white min-w-[150px]">
              <Save className="mr-2 h-4 w-4" /> Publish Project
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AddProject;