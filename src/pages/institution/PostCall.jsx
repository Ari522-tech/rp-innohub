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
        <Button variant="outline" className="border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100">Cancel</Button>
      </div>

      <Card className="bg-white shadow-xl border-t-4 border-t-rp-blue">
        <CardHeader>
          <CardTitle className="text-slate-900">Call Details</CardTitle>
          <CardDescription className="text-slate-500">Define the challenge, budget, and timeline.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Title & Type */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Call Title</Label>
              {/* Added text-slate-900 */}
              <Input 
                placeholder="e.g. Digital Health Records System" 
                className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-rp-blue" 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Type</Label>
              <Select>
                {/* Added text-slate-900 */}
                <SelectTrigger className="bg-white border-slate-300 text-slate-900 focus:ring-rp-blue">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200">
                  <SelectItem value="job" className="text-slate-700 focus:bg-slate-100 cursor-pointer">Job / Internship</SelectItem>
                  <SelectItem value="challenge" className="text-slate-700 focus:bg-slate-100 cursor-pointer">Innovation Challenge</SelectItem>
                  <SelectItem value="contract" className="text-slate-700 focus:bg-slate-100 cursor-pointer">Development Contract</SelectItem>
                  <SelectItem value="grant" className="text-slate-700 focus:bg-slate-100 cursor-pointer">Research Grant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label className="text-slate-700 font-medium">Description & Requirements</Label>
            {/* Added text-slate-900 */}
            <textarea 
              className="flex min-h-[150px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rp-blue disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Describe what you need, required skills, and expected deliverables..."
            />
          </div>

          {/* Budget & Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Budget / Salary Range (RWF)</Label>
              {/* Added text-slate-900 */}
              <Input 
                placeholder="e.g. 15,000,000 - 20,000,000" 
                className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-rp-blue" 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Application Deadline</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                {/* Added text-slate-900 & padding for icon */}
                <Input 
                  className="pl-10 bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-rp-blue" 
                  placeholder="DD/MM/YYYY" 
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex justify-end gap-4 border-t border-slate-100 mt-6">
            <Button variant="ghost" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              <Save className="mr-2 h-4 w-4" /> Save Draft
            </Button>
            <Button className="bg-rp-blue hover:bg-blue-900 text-white min-w-[150px] shadow-lg shadow-blue-900/20">
              <Send className="mr-2 h-4 w-4" /> Publish Call
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default PostCall;