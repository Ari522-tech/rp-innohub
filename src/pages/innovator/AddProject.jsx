// src/pages/innovator/AddProject.jsx
"use client"

// import { useState } from "react"
import { ArrowRight, Save, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AddProject() {
  // const [step, setStep] = useState(1) // for future multi-step

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Publish New Innovation
          </h1>
          <p className="text-sm text-slate-600">
            Share your socio-economic IT solution with institutions
          </p>
        </div>
        <Button variant="outline">Cancel</Button>
      </div>

      <Separator />

      <Card className="border border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Project Information</CardTitle>
          <CardDescription className="text-sm text-slate-600">
            Provide clear details so institutions can understand your solution
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1 – Basic info */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Project Title</Label>
              <Input placeholder="e.g. Smart Irrigation Monitoring System" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select main category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="transport">Transport</SelectItem>
                  <SelectItem value="energy">Energy & Environment</SelectItem>
                  <SelectItem value="fintech">Fintech</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-slate-700">Short Description</Label>
            <Textarea
              placeholder="Summarize the problem and your solution in 2–3 sentences..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-slate-700">Technologies / Stack</Label>
            <Input placeholder="React, Node.js, IoT sensors, Python, ..." />
            <p className="text-xs text-slate-500">
              Separate with commas • helps institutions match experts
            </p>
          </div>

          {/* Image upload area */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-slate-700">Project Image / Thumbnail</Label>
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 p-10 text-center hover:border-blue-400 transition-colors">
              <Upload className="mb-3 h-8 w-8 text-slate-400" />
              <p className="font-medium text-slate-700">Click to upload or drag & drop</p>
              <p className="mt-1 text-xs text-slate-500">
                PNG, JPG, WEBP • max 3 MB • recommended 1200×800
              </p>
            </div>
          </div>

          <Separator />

          {/* Action buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button variant="outline" className="sm:w-auto">
              <Save className="mr-2 h-4 w-4" />
              Save as Draft
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 sm:w-auto">
              Continue to Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}