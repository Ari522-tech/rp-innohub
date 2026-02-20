// src/pages/institution/Dashboard.jsx
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { PlusCircle, Users, FileText, Clock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"

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

export default function InstitutionDashboard() {
  const [stats, setStats] = useState(null)
  const [recentCalls, setRecentCalls] = useState([])
  const [timeRange, setTimeRange] = useState("90d")
  const [isLoading, setIsLoading] = useState(true)

  const chartData = [
    { date: "2026-01-01", submissions: 6, awarded: 1 },
    { date: "2026-01-15", submissions: 11, awarded: 2 },
    { date: "2026-02-01", submissions: 19, awarded: 3 },
    { date: "2026-02-15", submissions: 16, awarded: 4 },
  ]

  useEffect(() => {
    setTimeout(() => {
      setStats({
        activeCalls: 4,
        totalSubmissions: 28,
        pendingReview: 11,
        awarded: 5,
        closed: 8,
      })
      setRecentCalls([
        { id: 1, title: "Mobile Learning Platform for TVET", status: "open", submissions: 14, deadline: "Mar 15, 2026" },
        { id: 2, title: "Digital Inventory for Workshops", status: "under-review", submissions: 9, deadline: "Feb 28, 2026" },
        { id: 3, title: "Smart Energy Monitoring – Campus", status: "awarded", submissions: 5, deadline: "Closed" },
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

  if (isLoading) return <InstitutionSkeleton />

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Institution Dashboard
          </h1>
          <p className="text-sm text-slate-600">
            Manage your calls and track submissions
          </p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link to="/institution/post-call">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Call
          </Link>
        </Button>
      </div>

      <Separator />

      {/* Metrics */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <MetricCard title="Active Calls" value={stats.activeCalls} trend="+1" trendUp icon={FileText} />
        <MetricCard title="Total Submissions" value={stats.totalSubmissions} trend="+18%" trendUp icon={Users} />
        <MetricCard title="Pending Review" value={stats.pendingReview} trend="+4" trendUp={false} icon={Clock} />
        <MetricCard title="Awarded" value={stats.awarded} trend="+2" trendUp icon={CheckCircle2} />
        <MetricCard title="Closed" value={stats.closed} trend="0%" trendUp={null} icon={AlertCircle} />
      </div>

      {/* Submissions Chart */}
      <Card className="border border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-lg font-medium">Submissions Trend</CardTitle>
            <CardDescription className="text-sm text-slate-600">
              Monthly submissions and awarded projects
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
        <CardContent className="pt-1">
          <ChartContainer config={{
            submissions: { label: "Submissions", color: "hsl(var(--primary))" },
            awarded: { label: "Awarded", color: "hsl(var(--primary) / 0.6)" },
          }} className="h-[240px] sm:h-[280px] w-full">
            <AreaChart data={filteredData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={v => new Date(v).toLocaleDateString("en", { month: "short" })} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area dataKey="awarded" type="natural" fill="hsl(var(--primary) / 0.4)" stroke="hsl(var(--primary) / 0.6)" stackId="a" />
              <Area dataKey="submissions" type="natural" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" stackId="a" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Recent Calls */}
      <Card className="border border-slate-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">Recent Calls</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/institution/calls" className="text-blue-600 hover:text-blue-700">
                View all <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentCalls.map(call => (
            <div key={call.id} className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-0.5 flex-1">
                  <h3 className="font-medium text-slate-900">{call.title}</h3>
                  <p className="text-sm text-slate-500">Deadline: {call.deadline}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Badge variant="outline" className={
                    call.status === "open" ? "border-green-200 bg-green-50 text-green-700" :
                    call.status === "under-review" ? "border-blue-200 bg-blue-50 text-blue-700" :
                    call.status === "awarded" ? "border-indigo-200 bg-indigo-50 text-indigo-700" :
                    "border-slate-200 bg-slate-50 text-slate-700"
                  }>
                    {call.status === "open" ? "Open" :
                     call.status === "under-review" ? "In Review" :
                     call.status === "awarded" ? "Awarded" : "Closed"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {call.submissions} submissions
                  </Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <Button variant="outline" size="sm">View Details</Button>
                {call.status === "open" && (
                  <Button variant="outline" size="sm">Manage Submissions</Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function MetricCard({ title, value, trend, trendUp}) {
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

function InstitutionSkeleton() {
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {Array(5).fill(0).map((_, i) => <Skeleton key={i} className="h-32 rounded-xl border border-slate-200" />)}
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
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
              <Skeleton className="h-4 w-48" />
              <div className="flex gap-3">
                <Skeleton className="h-9 w-28" />
                <Skeleton className="h-9 w-36" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}