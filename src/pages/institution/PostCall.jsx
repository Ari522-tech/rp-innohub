// src/pages/institution/PostCall.jsx
"use client"

// import { useState } from "react"
import { Calendar, Save, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PostCall() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Post New Call for Development
          </h1>
          <p className="text-sm text-slate-600">
            Define the challenge and invite innovators to propose solutions
          </p>
        </div>
        <Button variant="outline">Cancel</Button>
      </div>

      <Separator />

      <Card className="border border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Call Information</CardTitle>
          <CardDescription className="text-sm text-slate-600">
            Be specific about requirements, timeline and budget
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Call Title</Label>
              <Input placeholder="e.g. Development of Mobile Learning Platform for TVET" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Type of Opportunity</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Development Contract</SelectItem>
                  <SelectItem value="grant">Research / Innovation Grant</SelectItem>
                  <SelectItem value="challenge">Open Innovation Challenge</SelectItem>
                  <SelectItem value="internship">Internship / Mentorship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-slate-700">Description & Requirements</Label>
            <Textarea
              placeholder="Describe the problem, expected deliverables, required skills..."
              className="min-h-[140px]"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Budget Range (RWF)</Label>
              <Input placeholder="e.g. 10,000,000 – 25,000,000" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Deadline</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <Input className="pl-10" placeholder="DD/MM/YYYY" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button variant="outline">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Send className="mr-2 h-4 w-4" />
              Publish Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}