// src/components/dashboard/ActivityFeedItem.jsx
import { Badge } from "@/components/ui/badge"

export default function ActivityFeedItem({
//   icon: Icon = Activity,
  action,
  target,
  actor,
  time,
  variant = "default", // "warning", "success", "destructive"
}) {
  const variantStyles = {
    default: "bg-slate-100 text-slate-700",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    success: "bg-green-50 text-green-700 border-green-200",
    destructive: "bg-red-50 text-red-700 border-red-200",
  }

  return (
    <div className="flex items-start gap-4 rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors">
      <div className={`rounded-full p-2.5 ${variantStyles[variant]}`}>
        <Icon className="h-5 w-5" />
      </div>

      <div className="flex-1 space-y-0.5">
        <p className="font-medium text-slate-900">{action}</p>
        <p className="text-sm text-slate-600">
          <span className="font-medium">{target}</span>
          {" • "}
          <span className="text-slate-500">{actor}</span>
        </p>
        <p className="text-xs text-slate-500">{time}</p>
      </div>

      <Badge variant="outline" className="text-xs border-slate-300">
        View
      </Badge>
    </div>
  )
}