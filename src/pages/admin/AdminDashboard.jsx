// src/pages/admin/AdminDashboard.jsx
"use client"

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { Users, Briefcase, FileText, AlertTriangle, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const chartData = [
  { date: '2026-01-01', users: 280, projects: 92 },
  { date: '2026-01-15', users: 310, projects: 105 },
  { date: '2026-02-01', users: 335, projects: 118 },
  { date: '2026-02-15', users: 342, projects: 128 },
  // ... extend if needed
]

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [timeRange, setTimeRange] = useState('90d')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalUsers: 342,
        activeInnovators: 187,
        institutions: 41,
        totalProjects: 128,
        pendingModeration: 7,
        reportedItems: 3,
      })
      setIsLoading(false)
    }, 900)
  }, [])

  const filteredData = chartData.filter(item => {
    const date = new Date(item.date)
    const ref = new Date('2026-02-20')
    let days = timeRange === '30d' ? 30 : timeRange === '7d' ? 7 : 90
    const start = new Date(ref)
    start.setDate(start.getDate() - days)
    return date >= start
  })

  if (isLoading) return <Skeleton className="h-[600px] w-full rounded-xl" />

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Admin Center
          </h1>
          <p className="text-sm text-slate-600">Platform health & moderation queue</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/admin/reports">
            Full Reports <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Separator />

      {/* Metric Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Total Users" value={stats?.totalUsers} trend="+22" trendUp />
        <MetricCard title="Active Innovators" value={stats?.activeInnovators} trend="+15" trendUp />
        <MetricCard title="Institutions" value={stats?.institutions} trend="+3" trendUp />
        <MetricCard title="Pending Moderation" value={stats?.pendingModeration} trend="+4" trendUp={false} />
      </div>

      {/* Growth Chart */}
      <Card className="border border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-lg font-medium">Platform Growth</CardTitle>
            <CardDescription className="text-sm text-slate-600">
              New users & published projects
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <ToggleGroup type="single" value={timeRange} onValueChange={setTimeRange} variant="outline" className="hidden sm:flex">
              <ToggleGroupItem value="7d">7d</ToggleGroupItem>
              <ToggleGroupItem value="30d">30d</ToggleGroupItem>
              <ToggleGroupItem value="90d">90d</ToggleGroupItem>
            </ToggleGroup>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-28 sm:hidden">
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
          <ChartContainer config={{ users: { color: 'hsl(var(--primary))' }, projects: { color: 'hsl(var(--primary) / 0.6)' } }} className="h-[240px] sm:h-[280px]">
            <AreaChart data={filteredData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={v => new Date(v).toLocaleDateString('en', { month: 'short' })} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area dataKey="projects" type="natural" fill="hsl(var(--primary) / 0.4)" stroke="hsl(var(--primary) / 0.6)" stackId="a" />
              <Area dataKey="users" type="natural" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" stackId="a" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Pending Items / Activity (simple version – can be replaced with DataTable later) */}
      <Card className="border border-slate-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Pending Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">8 projects awaiting approval</p>
                <p className="text-sm text-slate-500">Highest priority: 3 flagged</p>
              </div>
              <Button variant="outline" size="sm">Review Queue</Button>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">3 reported items</p>
                <p className="text-sm text-slate-500">2 from last 24h</p>
              </div>
              <Button variant="outline" size="sm">Moderate</Button>
            </div>
          </div>
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
        <Badge variant="outline" className={trendUp ? "text-green-600 border-green-200 bg-green-50" : "text-red-600 border-red-200 bg-red-50"}>
          {trend}
        </Badge>
        <span className="ml-2 text-xs text-slate-600">vs last period</span>
      </CardContent>
    </Card>
  )
}