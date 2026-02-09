import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Save, Send } from 'lucide-react';

const PostCall = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-10">
      
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Post New Opportunity</h1>
        <Button variant="outline" className="border-slate-300 text-slate-600">Cancel</Button>
      </div>

      <Card className="bg-white shadow-xl border-t-4 border-t-rp-blue">
        <CardHeader>
          <CardTitle>Call Details</CardTitle>
          <CardDescription>Define the challenge, budget, and timeline.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Title & Type */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Call Title</Label>
              <Input placeholder="e.g. Digital Health Records System" />
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <Select>
                <SelectTrigger className="bg-white border-slate-300">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="job">Job / Internship</SelectItem>
                  <SelectItem value="challenge">Innovation Challenge</SelectItem>
                  <SelectItem value="contract">Development Contract</SelectItem>
                  <SelectItem value="grant">Research Grant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description & Requirements</Label>
            <textarea 
              className="flex min-h-[150px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rp-blue disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Describe what you need, required skills, and expected deliverables..."
            />
          </div>

          {/* Budget & Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Budget / Salary Range (RWF)</Label>
              <Input placeholder="e.g. 15,000,000 - 20,000,000" />
            </div>
            <div className="space-y-2">
              <Label>Application Deadline</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input className="pl-10" placeholder="DD/MM/YYYY" />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-4">
            <Button variant="ghost" className="text-slate-600">
              <Save className="mr-2 h-4 w-4" /> Save Draft
            </Button>
            <Button className="bg-rp-blue hover:bg-blue-900 text-white min-w-[150px]">
              <Send className="mr-2 h-4 w-4" /> Publish Call
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default PostCall;