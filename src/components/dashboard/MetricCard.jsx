// src/components/dashboard/MetricCard.jsx
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MetricCard({
  title,
  value,
  description = "",
  trend = "",
  trendUp = null, // true = up/green, false = down/red, null = neutral
  icon: Icon,
}) {
  return (
    <Card className="border border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardDescription className="text-sm font-medium text-slate-600">
          {title}
        </CardDescription>
        {Icon && <Icon className="h-4 w-4 text-slate-500" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-slate-500 mt-1">{description}</p>
        )}
        {trend && (
          <div className="mt-2 flex items-center gap-1.5 text-xs">
            <Badge
              variant="outline"
              className={`
                px-2 py-0.5 text-xs font-medium
                ${trendUp === true
                  ? "border-green-200 bg-green-50 text-green-700"
                  : trendUp === false
                  ? "border-red-200 bg-red-50 text-red-700"
                  : "border-slate-200 bg-slate-50 text-slate-600"}
              `}
            >
              {trend}
            </Badge>
            <span className="text-slate-500">vs last period</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}