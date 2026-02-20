// src/pages/admin/AdminDashboard.jsx
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Area, AreaChart, CartesianGrid, XAxis
} from "recharts"
import {
  BarChart3, Users, ShieldCheck, Briefcase, FileText, AlertTriangle,
  ArrowRight, Activity
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

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [recentActivity, setRecentActivity] = useState([])
  const [timeRange, setTimeRange] = useState("90d")
  const [isLoading, setIsLoading] = useState(true)

  // Mock platform growth chart data
  const chartData = [
    { date: "2026-01-01", users: 280, projects: 92 },
    { date: "2026-01-15", users: 310, projects: 105 },
    { date: "2026-02-01", users: 335, projects: 118 },
    { date: "2026-02-15", users: 342, projects: 128 },
    // extend as needed
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        totalUsers: 342,
        activeInnovators: 187,
        institutions: 41,
        totalProjects: 128,
        totalCalls: 19,
        pendingModeration: 7,
        reportedItems: 3,
      })

      setRecentActivity([
        {
          id: 1,
          action: "New project published",
          target: "AI-Powered Crop Disease Detector",
          actor: "jean.paul",
          time: "14 min ago",
        },
        {
          id: 2,
          action: "Call awarded",
          target: "Smart Campus Security System",
          actor: "System",
          time: "2 hours ago",
        },
        {
          id: 3,
          action: "Content reported",
          target: "Project #87",
          actor: "admin.marie",
          time: "Yesterday",
        },
        {
          id: 4,
          action: "Institution verified",
          target: "Rwanda Polytechnic - Musanze",
          actor: "System",
          time: "3 days ago",
        },
      ])

      setIsLoading(false)
    }, 1300)

    return () => clearTimeout(timer)
  }, [])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const reference = new Date("2026-02-20")
    let days = timeRange === "30d" ? 30 : timeRange === "7d" ? 7 : 90
    const start = new Date(reference)
    start.setDate(start.getDate() - days)
    return date >= start
  })

  if (isLoading) {
    return <AdminDashboardSkeleton />
  }

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      {/* Header + CTA */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Admin Center
          </h1>
          <p className="text-sm text-slate-600">
            Platform overview • moderation • analytics
          </p>
        </div>

        <Button variant="outline" asChild>
          <Link to="/admin/reports">
            View Reports <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Separator className="my-6" />

      {/* Main Metrics */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Total Users" value={stats.totalUsers} trend="+22" trendUp={true} />
        <MetricCard title="Active Innovators" value={stats.activeInnovators} trend="+15" trendUp={true} />
        <MetricCard title="Institutions" value={stats.institutions} trend="+3" trendUp={true} />
        <MetricCard title="Pending Moderation" value={stats.pendingModeration} trend="+4" trendUp={false} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCard title="Published Projects" value={stats.totalProjects} trend="+19" trendUp={true} />
        <MetricCard title="Active Calls" value={stats.totalCalls} trend="+2" trendUp={true} />
        <MetricCard title="Reported Items" value={stats.reportedItems} trend="+1" trendUp={false} />
      </div>

      {/* Platform Growth Chart */}
      <Card className="border border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-lg font-medium">Platform Growth</CardTitle>
            <CardDescription className="text-sm text-slate-600">
              New users and published projects
            </CardDescription>
          </div>

          <div className="flex items-center gap-2">
            <ToggleGroup
              type="single"
              value={timeRange}
              onValueChange={setTimeRange}
              variant="outline"
              className="hidden md:flex"
            >
              <ToggleGroupItem value="7d">7 days</ToggleGroupItem>
              <ToggleGroupItem value="30d">30 days</ToggleGroupItem>
              <ToggleGroupItem value="90d">90 days</ToggleGroupItem>
            </ToggleGroup>

            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[140px] md:hidden">
                <SelectValue placeholder="Time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent className="pt-2">
          <ChartContainer
            config={{
              users: { label: "Users", color: "hsl(var(--primary))" },
              projects: { label: "Projects", color: "hsl(var(--primary) / 0.6)" },
            }}
            className="h-[260px] sm:h-[300px] w-full"
          >
            <AreaChart data={filteredData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                dataKey="projects"
                type="natural"
                fill="hsl(var(--primary) / 0.4)"
                stroke="hsl(var(--primary) / 0.6)"
                stackId="a"
              />
              <Area
                dataKey="users"
                type="natural"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="border border-slate-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/activity" className="text-blue-600 hover:text-blue-700">
                View full log <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <CardDescription className="text-sm text-slate-600">
            Latest actions across the platform
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {recentActivity.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors"
            >
              <div
                className={`rounded-full p-2.5 ${
                  item.action.includes("reported")
                    ? "bg-red-50 text-red-600"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                <Activity className="h-5 w-5" />
              </div>

              <div className="flex-1 space-y-0.5">
                <p className="font-medium text-slate-900">{item.action}</p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">{item.target}</span> •{" "}
                  <span className="text-slate-500">{item.actor}</span>
                </p>
                <p className="text-xs text-slate-500">{item.time}</p>
              </div>

              <Badge variant="outline" className="text-xs border-slate-300">
                View
              </Badge>
            </div>
          ))}

          {recentActivity.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No recent activity recorded.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <QuickActionCard
          title="Moderate Content"
          description="Review reported projects, calls and comments"
          cta="Open Moderation"
          link="/admin/moderation"
        />
        <QuickActionCard
          title="User Management"
          description="View accounts, roles, verification status"
          cta="Manage Users"
          link="/admin/users"
        />
        <QuickActionCard
          title="Platform Reports"
          description="Analytics, growth trends, export data"
          cta="View Reports"
          link="/admin/reports"
        />
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────
// Reusable components (shared)
// ────────────────────────────────────────────────

function MetricCard({ title, value, trend, trendUp }) {
  return (
    <Card className="border border-slate-200">
      <CardHeader className="pb-2">
        <CardDescription className="text-sm">{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">
          {value}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm">
          <Badge
            variant="outline"
            className={
              trendUp === true
                ? "border-green-200 text-green-700 bg-green-50"
                : trendUp === false
                ? "border-red-200 text-red-700 bg-red-50"
                : "border-slate-200 text-slate-600 bg-slate-50"
            }
          >
            {trend}
          </Badge>
          <span className="text-slate-600">vs previous</span>
        </div>
      </CardContent>
    </Card>
  )
}

function QuickActionCard({ title, description, cta, link }) {
  return (
    <Card className="border border-slate-200 hover:border-slate-300 transition-colors">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" asChild className="w-full sm:w-auto">
          <Link to={link}>{cta}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

// Skeleton
function AdminDashboardSkeleton() {
  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="h-4 w-80" />
        </div>
        <Skeleton className="h-10 w-44" />
      </div>

      <Separator className="my-6" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl border border-slate-200" />
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl border border-slate-200" />
        ))}
      </div>

      <Card className="border border-slate-200">
        <CardHeader className="pb-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-72 mt-1.5" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[260px] sm:h-[300px] w-full rounded-lg" />
        </CardContent>
      </Card>

      <Card className="border border-slate-200">
        <CardHeader className="pb-3">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-72 mt-1.5" />
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-lg border border-slate-200 p-4"
            >
              <Skeleton className="h-10 w-10 rounded-full shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-56" />
                <Skeleton className="h-3 w-32" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}