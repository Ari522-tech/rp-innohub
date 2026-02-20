// src/pages/institution/InstitutionDashboard.jsx
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Area, AreaChart, CartesianGrid, XAxis
} from "recharts"
import {
  PlusCircle, Users, FileText, Clock, CheckCircle2, AlertCircle, ArrowRight
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

export default function InstitutionDashboard() {
  const [stats, setStats] = useState(null)
  const [recentCalls, setRecentCalls] = useState([])
  const [timeRange, setTimeRange] = useState("90d")
  const [isLoading, setIsLoading] = useState(true)

  // Mock chart data — will be replaced with real API data later
  const chartData = [
    { date: "2026-01-01", submissions: 8, awarded: 1 },
    { date: "2026-01-15", submissions: 14, awarded: 2 },
    { date: "2026-02-01", submissions: 22, awarded: 3 },
    { date: "2026-02-15", submissions: 19, awarded: 4 },
    // Add more entries up to ~Feb 20, 2026 as needed
  ]

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setStats({
        activeCalls: 4,
        totalSubmissions: 28,
        pendingReview: 11,
        awarded: 5,
        closed: 8,
      })

      setRecentCalls([
        {
          id: 1,
          title: "Mobile Learning Platform for TVET Institutions",
          status: "open",
          submissions: 14,
          deadline: "Mar 15, 2026",
        },
        {
          id: 2,
          title: "Digital Inventory System for Workshops",
          status: "under-review",
          submissions: 9,
          deadline: "Feb 28, 2026",
        },
        {
          id: 3,
          title: "Smart Energy Monitoring – Campus Buildings",
          status: "awarded",
          submissions: 5,
          deadline: "Closed",
        },
      ])

      setIsLoading(false)
    }, 1100)

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
    return <InstitutionDashboardSkeleton />
  }

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      {/* Header + CTA */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Institution Dashboard
          </h1>
          <p className="text-sm text-slate-600">
            Overview of your calls and submission activity
          </p>
        </div>

        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link to="/institution/post-call">
            <PlusCircle className="mr-2 h-4 w-4" />
            Post New Call
          </Link>
        </Button>
      </div>

      <Separator className="my-6" />

      {/* Metric Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="Active Calls"
          value={stats.activeCalls}
          trend="+1"
          trendUp={true}
        />
        <MetricCard
          title="Total Submissions"
          value={stats.totalSubmissions}
          trend="+18%"
          trendUp={true}
        />
        <MetricCard
          title="Pending Review"
          value={stats.pendingReview}
          trend="+4"
          trendUp={false}
        />
        <MetricCard
          title="Projects Awarded"
          value={stats.awarded}
          trend="+2"
          trendUp={true}
        />
        <MetricCard
          title="Closed Calls"
          value={stats.closed}
          trend="0%"
          trendUp={null}
        />
      </div>

      {/* Submissions Trend Chart */}
      <Card className="border border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-lg font-medium">Submissions Trend</CardTitle>
            <CardDescription className="text-sm text-slate-600">
              Monthly submissions and awarded projects
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
              submissions: { label: "Submissions", color: "hsl(var(--primary))" },
              awarded: { label: "Awarded", color: "hsl(var(--primary) / 0.6)" },
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
                dataKey="awarded"
                type="natural"
                fill="hsl(var(--primary) / 0.4)"
                stroke="hsl(var(--primary) / 0.6)"
                stackId="a"
              />
              <Area
                dataKey="submissions"
                type="natural"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
                stackId="a"
              />
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
          <CardDescription className="text-sm text-slate-600">
            Most recently created or updated calls
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {recentCalls.map((call) => (
            <div
              key={call.id}
              className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="space-y-0.5">
                  <h3 className="font-medium leading-tight text-slate-900">
                    {call.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    Deadline: {call.deadline}
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <Badge
                    variant="outline"
                    className={
                      call.status === "open"
                        ? "border-green-200 text-green-700 bg-green-50"
                        : call.status === "under-review"
                        ? "border-blue-200 text-blue-700 bg-blue-50"
                        : call.status === "awarded"
                        ? "border-indigo-200 text-indigo-700 bg-indigo-50"
                        : "border-slate-200 text-slate-700 bg-slate-50"
                    }
                  >
                    {call.status === "open"
                      ? "Open"
                      : call.status === "under-review"
                      ? "In Review"
                      : call.status === "awarded"
                      ? "Awarded"
                      : "Closed"}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {call.submissions} submissions
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                {call.status === "open" && (
                  <Button variant="outline" size="sm">
                    Manage Submissions
                  </Button>
                )}
              </div>
            </div>
          ))}

          {recentCalls.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No calls posted yet.
              <Button asChild variant="outline" className="mt-4 block w-fit mx-auto">
                <Link to="/institution/post-call">Create first call</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// ────────────────────────────────────────────────
// Reusable MetricCard (shared across dashboards)
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
          <span className="text-slate-600">vs previous period</span>
        </div>
      </CardContent>
    </Card>
  )
}

// ────────────────────────────────────────────────
// Skeleton (updated to match new layout)
// ────────────────────────────────────────────────

function InstitutionDashboardSkeleton() {
  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-80" />
        </div>
        <Skeleton className="h-10 w-44" />
      </div>

      <Separator className="my-6" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
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
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="space-y-3 rounded-lg border border-slate-200 p-4"
            >
              <div className="flex justify-between">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-28" />
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