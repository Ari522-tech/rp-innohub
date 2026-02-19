import React from "react"
import { cn } from "@/lib/utils"

export function Item({ className, children }) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-md p-3 flex flex-col gap-2",
        className
      )}
    >
      {children}
    </div>
  )
}

export function ItemMedia({ className, children }) {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  )
}

export function ItemContent({ className, children }) {
  return (
    <div className={cn("flex-1 space-y-1", className)}>
      {children}
    </div>
  )
}

export function ItemTitle({ className, children }) {
  return (
    <h3 className={cn("text-sm font-medium text-slate-900", className)}>
      {children}
    </h3>
  )
}

export function ItemDescription({ className, children }) {
  return (
    <p className={cn("text-xs text-slate-600", className)}>
      {children}
    </p>
  )
}

export function ItemActions({ className, children }) {
  return (
    <div className={cn("pt-2", className)}>
      {children}
    </div>
  )
}
