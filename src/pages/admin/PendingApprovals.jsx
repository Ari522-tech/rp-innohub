// src/pages/admin/PendingApprovals.jsx
"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Eye } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function PendingApprovals() {
  const [pendingProjects, setPendingProjects] = useState([])
  const [pendingCalls, setPendingCalls] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPendingProjects([
        { id: 101, title: "Drone Delivery Prototype", author: "Alice M.", date: "Feb 10, 2026" },
        { id: 102, title: "Bio-Gas Plant Model", author: "Eric K.", date: "Feb 12, 2026" },
      ])
      setPendingCalls([
        { id: 201, title: "Call for Green Energy Solutions", author: "MinInfra", date: "Feb 9, 2026" },
      ])
      setIsLoading(false)
    }, 800)
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-12 w-full" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl border" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Pending Approvals
        </h1>
        <p className="text-sm text-slate-600">
          Review and moderate new projects and calls
        </p>
      </div>

      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList className="bg-slate-50 border border-slate-200">
          <TabsTrigger value="projects">
            Projects <Badge className="ml-1.5 bg-slate-200 text-slate-700">{pendingProjects.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="calls">
            Calls <Badge className="ml-1.5 bg-slate-200 text-slate-700">{pendingCalls.length}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          {pendingProjects.map(item => (
            <Card key={item.id} className="border border-slate-200">
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-600 font-medium">
                    {item.title.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500">
                      Submitted by {item.author} • {item.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-1.5 h-4 w-4" /> View
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Check className="mr-1.5 h-4 w-4" /> Approve
                  </Button>
                  <Button size="sm" variant="destructive">
                    <X className="mr-1.5 h-4 w-4" /> Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="calls" className="space-y-4">
          {pendingCalls.map(item => (
            <Card key={item.id} className="border border-slate-200">
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                {/* same structure as projects */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-600 font-medium">
                    C
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500">
                      Posted by {item.author} • {item.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-1.5 h-4 w-4" /> View
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Check className="mr-1.5 h-4 w-4" /> Approve
                  </Button>
                  <Button size="sm" variant="destructive">
                    <X className="mr-1.5 h-4 w-4" /> Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}