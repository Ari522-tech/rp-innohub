// src/components/dashboard/PendingItemCard.jsx
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Check, X } from "lucide-react"

export default function PendingItemCard({
  title,
  subtitle,
  status = "pending",
  date,
  onView,
  onApprove,
  onReject,
}) {
  const statusStyles = {
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    review: "bg-blue-50 text-blue-700 border-blue-200",
    urgent: "bg-red-50 text-red-700 border-red-200",
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-200 p-5 hover:border-slate-300 transition-colors sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 rounded-md bg-slate-100 flex items-center justify-center text-slate-600 font-medium">
          {title.charAt(0).toUpperCase()}
        </div>

        <div className="space-y-1">
          <h3 className="font-medium leading-tight text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
          {date && <p className="text-xs text-slate-400">Submitted {date}</p>}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Badge
          variant="outline"
          className={`px-2.5 py-0.5 text-xs font-medium border ${statusStyles[status] || statusStyles.pending}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onView}>
            <Eye className="mr-1.5 h-4 w-4" />
            View
          </Button>
          {onApprove && (
            <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={onApprove}>
              <Check className="mr-1.5 h-4 w-4" />
              Approve
            </Button>
          )}
          {onReject && (
            <Button size="sm" variant="destructive" onClick={onReject}>
              <X className="mr-1.5 h-4 w-4" />
              Reject
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}