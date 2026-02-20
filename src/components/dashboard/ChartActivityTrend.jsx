// src/components/dashboard/ChartActivityTrend.jsx
"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function ChartActivityTrend({
  title = "Activity Trend",
  description = "Submissions, views or other metrics over time",
  data = [], // array of { date, value1, value2, ... }
  config = {}, // e.g. { submissions: { label: "Submissions", color: "hsl(var(--primary))" } }
  height = "h-[240px] sm:h-[280px]",
}) {
  const [timeRange, setTimeRange] = useState("90d")

  // Filter data based on selected range (assumes date is ISO string)
  const filteredData = data.filter(item => {
    const date = new Date(item.date)
    const ref = new Date() // or fixed reference date
    let days = timeRange === "30d" ? 30 : timeRange === "7d" ? 7 : 90
    const start = new Date(ref)
    start.setDate(start.getDate() - days)
    return date >= start
  })

  return (
    <Card className="border border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <CardDescription className="text-sm text-slate-600">
            {description}
          </CardDescription>
        </div>

        <div className="flex items-center gap-2">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden sm:flex"
          >
            <ToggleGroupItem value="7d">7 days</ToggleGroupItem>
            <ToggleGroupItem value="30d">30 days</ToggleGroupItem>
            <ToggleGroupItem value="90d">90 days</ToggleGroupItem>
          </ToggleGroup>

          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[130px] sm:hidden">
              <SelectValue placeholder="Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="pt-1">
        <ChartContainer config={config} className={`${height} w-full`}>
          <AreaChart data={filteredData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            {Object.keys(config).map((key) => (
              <Area
                key={key}
                dataKey={key}
                type="natural"
                fill={config[key].color + "40"} // 25% opacity
                stroke={config[key].color}
                stackId="a"
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}