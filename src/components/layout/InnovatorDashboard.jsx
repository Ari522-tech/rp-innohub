// src/pages/innovator/InnovatorDashboard.jsx
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { 
  Area, AreaChart, CartesianGrid, XAxis 
} from "recharts"
import { 
  PlusCircle, Briefcase, FileText, Clock, CheckCircle2, AlertCircle, ArrowRight 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export default function InnovatorDashboard() {
  const [stats, setStats] = useState(null)
  const [recentProjects, setRecentProjects] = useState([])
  const [timeRange, setTimeRange] = useState("90d")
  const [isLoading, setIsLoading] = useState(true)

  // Mock chart data (replace with real API later)
  const chartData = [
    { date: "2026-01-01", submissions: 4, views: 12 },
    { date: "2026-01-15", submissions: 7, views: 28 },
    // ... add more months up to Feb 20, 2026
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        totalProjects: 7,
        pendingApplications: 3,
        accepted: 2,
        rejected: 1,
        draft: 1,
      })
      setRecentProjects([
        { id: 1, title: "Smart Agriculture Monitoring System", status: "under-review", updated: "2 days ago" },
        { id: 2, title: "Digital Health Records for Rural Clinics", status: "accepted", updated: "1 week ago" },
        { id: 3, title: "E-Learning Platform for TVET", status: "draft", updated: "3 days ago" },
      ])
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const filteredData = chartData.filter(item => {
    const date = new Date(item.date)
    const ref = new Date("2026-02-20")
    let days = 90
    if (timeRange === "30d") days = 30
    if (timeRange === "7d") days = 7
    const start = new Date(ref)
    start.setDate(start.getDate() - days)
    return date >= start
  })

  if (isLoading) return <DashboardSkeleton />

  return (
    <div className="space-y-8 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Innovator Dashboard
          </h1>
          <p className="text-sm text-slate-600">
            Overview of your published solutions and applications
          </p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link to="/innovator/add-project">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Project
          </Link>
        </Button>
      </div>

      <Separator />

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Total Projects" value={stats.totalProjects} trend="+14%" icon={Briefcase} trendUp />
        <MetricCard title="Pending" value={stats.pendingApplications} trend="+2" icon={Clock} trendUp={false} />
        <MetricCard title="Accepted" value={stats.accepted} trend="+1" icon={CheckCircle2} trendUp />
        <MetricCard title="Needs Revision" value={stats.rejected + stats.draft} trend="-1" icon={AlertCircle} trendUp={false} />
      </div>

      {/* Interactive Chart */}
      <Card className="border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Activity Overview</CardTitle>
            <CardDescription>Submissions & views last months</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <ToggleGroup type="single" value={timeRange} onValueChange={setTimeRange} variant="outline" className="hidden md:flex">
              <ToggleGroupItem value="7d">7 days</ToggleGroupItem>
              <ToggleGroupItem value="30d">30 days</ToggleGroupItem>
              <ToggleGroupItem value="90d">90 days</ToggleGroupItem>
            </ToggleGroup>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32 md:hidden">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 days</SelectItem>
                <SelectItem value="30d">30 days</SelectItem>
                <SelectItem value="90d">90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{ submissions: { label: "Submissions", color: "hsl(var(--primary))" }, views: { label: "Views", color: "hsl(var(--primary) / 0.6)" } }} className="h-[280px] w-full">
            <AreaChart data={filteredData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} minTickGap={32} tickFormatter={v => new Date(v).toLocaleDateString("en", { month: "short", day: "numeric" })} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area dataKey="views" type="natural" fill="hsl(var(--primary) / 0.4)" stroke="hsl(var(--primary) / 0.6)" stackId="a" />
              <Area dataKey="submissions" type="natural" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" stackId="a" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Recent Projects Table-like list (can be replaced with full DataTable later) */}
      <Card className="border-slate-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Recent Projects</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/innovator/projects" className="text-blue-600">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentProjects.map(p => (
            <div key={p.id} className="flex flex-col gap-2 rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-500">Updated {p.updated}</p>
                </div>
                <Badge variant="outline" className={p.status === "accepted" ? "border-green-200 text-green-700" : p.status === "under-review" ? "border-blue-200 text-blue-700" : "border-slate-200 text-slate-700"}>
                  {p.status.replace("-", " ")}
                </Badge>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">Details</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function MetricCard({ title, value, trend, trendUp = true }) {
  return (
    <Card className="border-slate-200">
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1.5 text-sm">
          <Badge variant="outline" className={trendUp ? "text-green-600" : "text-red-600"}>
            {trend}
          </Badge>
          <span className="text-slate-600">vs last period</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Skeleton remains similar but add chart skeleton
function DashboardSkeleton() {
  return (
    <div className="space-y-8 p-4 md:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-80" />
        </div>
        <Skeleton className="h-10 w-48" />
      </div>
      <Separator />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array(4).fill(0).map((_, i) => <Skeleton key={i} className="h-32 rounded-xl border" />)}
      </div>
      <Card className="border-slate-200">
        <CardHeader className="pb-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-72 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[280px] w-full rounded-lg" />
        </CardContent>
      </Card>
      <Card className="border-slate-200">
        <CardHeader><Skeleton className="h-6 w-48" /></CardHeader>
        <CardContent className="space-y-4">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="space-y-3 rounded-lg border border-slate-200 p-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-40" />
              <div className="flex gap-3">
                <Skeleton className="h-9 w-20" />
                <Skeleton className="h-9 w-28" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}