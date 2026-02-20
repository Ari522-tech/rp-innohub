// src/pages/innovator/MyProjects.jsx
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function MyProjects() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setProjects([
        { id: 1, title: "Smart Irrigation System", category: "Agriculture", status: "Published", date: "Oct 24, 2025", views: 184 },
        { id: 2, title: "AI Traffic Optimizer", category: "Transport", status: "Under Review", date: "Nov 10, 2025", views: 62 },
        { id: 3, title: "E-Learning Platform for TVET", category: "Education", status: "Draft", date: "Jan 15, 2026", views: 0 },
      ])
      setIsLoading(false)
    }, 900)
  }, [])

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  if (isLoading) {
    return <MyProjectsSkeleton />
  }

  return (
    <div className="space-y-6">
      {/* Header + Search + CTA */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          My Projects
        </h1>

        <div className="flex w-full flex-1 items-center gap-3 sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 bg-white border-slate-200"
            />
          </div>

          <Button asChild className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
            <Link to="/innovator/add-project">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Link>
          </Button>
        </div>
      </div>

      <Separator />

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <div className="rounded-lg border border-slate-200 p-12 text-center">
            <p className="text-slate-500">No projects found.</p>
            {search && (
              <Button variant="outline" className="mt-4" onClick={() => setSearch("")}>
                Clear search
              </Button>
            )}
          </div>
        ) : (
          filteredProjects.map(project => (
            <Card key={project.id} className="border border-slate-200 hover:border-slate-300 transition-colors">
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                {/* Left – info */}
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-md bg-slate-100 flex items-center justify-center text-slate-500 font-medium">
                    {project.title.charAt(0)}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-medium leading-tight text-slate-900">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>Added {project.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        {project.views}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right – status + actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <Badge
                    variant="outline"
                    className={
                      project.status === "Published"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : project.status === "Under Review"
                        ? "border-blue-200 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-slate-50 text-slate-700"
                    }
                  >
                    {project.status}
                  </Badge>

                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

function MyProjectsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-9 w-48" />
        <div className="flex flex-1 gap-3">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-36 shrink-0" />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="border border-slate-200">
            <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <Skeleton className="h-14 w-14 rounded-md" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-56" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Skeleton className="h-6 w-24" />
                <div className="flex gap-1">
                  <Skeleton className="h-8 w-8" />
                  <Skeleton className="h-8 w-8" />
                  <Skeleton className="h-8 w-8" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}