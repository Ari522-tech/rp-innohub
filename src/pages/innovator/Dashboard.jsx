// src/pages/innovator/Dashboard.jsx
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { PlusCircle, Briefcase, Clock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function InnovatorDashboard() {
  const [stats, setStats] = useState(null)
  const [recentProjects, setRecentProjects] = useState([])
  const [timeRange, setTimeRange] = useState("90d")
  const [isLoading, setIsLoading] = useState(true)

  // Mock chart data (real data from API later)
  const chartData = [
    { date: "2026-01-01", submissions: 3, views: 18 },
    { date: "2026-01-15", submissions: 5, views: 45 },
    { date: "2026-02-01", submissions: 8, views: 92 },
    { date: "2026-02-15", submissions: 6, views: 78 },
  ]

  useEffect(() => {
    setTimeout(() => {
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
    }, 900)
  }, [])

  const filteredData = chartData.filter(item => {
    const date = new Date(item.date)
    const ref = new Date("2026-02-21")
    let days = timeRange === "30d" ? 30 : timeRange === "7d" ? 7 : 90
    const start = new Date(ref)
    start.setDate(start.getDate() - days)
    return date >= start
  })

  if (isLoading) return <DashboardSkeleton />

  return (
    <div className="space-y-8">
      {/* Header + CTA */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Total Projects" value={stats.totalProjects} trend="+14%" trendUp icon={Briefcase} />
        <MetricCard title="Pending Applications" value={stats.pendingApplications} trend="+2" trendUp={false} icon={Clock} />
        <MetricCard title="Accepted" value={stats.accepted} trend="+1" trendUp icon={CheckCircle2} />
        <MetricCard title="Needs Revision" value={stats.rejected + stats.draft} trend="-1" trendUp={false} icon={AlertCircle} />
      </div>

      {/* Activity Chart */}
      <Card className="border border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-lg font-medium">Activity Overview</CardTitle>
            <CardDescription className="text-sm text-slate-600">
              Submissions & views over time
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <ToggleGroup type="single" value={timeRange} onValueChange={setTimeRange} variant="outline" className="hidden sm:flex">
              <ToggleGroupItem value="7d">7 days</ToggleGroupItem>
              <ToggleGroupItem value="30d">30 days</ToggleGroupItem>
              <ToggleGroupItem value="90d">90 days</ToggleGroupItem>
            </ToggleGroup>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32 sm:hidden">
                <SelectValue placeholder="Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 days</SelectItem>
                <SelectItem value="30d">30 days</SelectItem>
                <SelectItem value="90d">90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="pt-1">
          <ChartContainer config={{
            submissions: { label: "Submissions", color: "hsl(var(--primary))" },
            views: { label: "Views", color: "hsl(var(--primary) / 0.6)" },
          }} className="h-[240px] sm:h-[280px] w-full">
            <AreaChart data={filteredData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={v => new Date(v).toLocaleDateString("en", { month: "short" })} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area dataKey="views" type="natural" fill="hsl(var(--primary) / 0.4)" stroke="hsl(var(--primary) / 0.6)" stackId="a" />
              <Area dataKey="submissions" type="natural" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" stackId="a" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Recent Projects */}
      <Card className="border border-slate-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">Recent Projects</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/innovator/projects" className="text-blue-600 hover:text-blue-700">
                View all <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentProjects.map(p => (
            <div key={p.id} className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-0.5">
                  <h3 className="font-medium text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-500">Updated {p.updated}</p>
                </div>
                <Badge variant="outline" className={
                  p.status === "accepted" ? "border-green-200 bg-green-50 text-green-700" :
                  p.status === "under-review" ? "border-blue-200 bg-blue-50 text-blue-700" :
                  "border-slate-200 bg-slate-50 text-slate-700"
                }>
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

function MetricCard({ title, value, trend, trendUp }) {
  return (
    <Card className="border border-slate-200">
      <CardHeader className="pb-2">
        <CardDescription className="text-sm">{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm">
          <Badge variant="outline" className={trendUp ? "border-green-200 text-green-700 bg-green-50" : "border-red-200 text-red-700 bg-red-50"}>
            {trend}
          </Badge>
          <span className="text-slate-600">vs previous</span>
        </div>
      </CardContent>
    </Card>
  )
}

function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-80" />
        </div>
        <Skeleton className="h-10 w-44" />
      </div>

      <Separator />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array(4).fill(0).map((_, i) => <Skeleton key={i} className="h-32 rounded-xl border border-slate-200" />)}
      </div>

      <Card className="border border-slate-200">
        <CardHeader className="pb-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-72 mt-1.5" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[240px] sm:h-[280px] w-full rounded-lg" />
        </CardContent>
      </Card>

      <Card className="border border-slate-200">
        <CardHeader className="pb-3">
          <Skeleton className="h-6 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="space-y-3 rounded-lg border border-slate-200 p-4">
              <div className="flex justify-between">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-24" />
              </div>
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