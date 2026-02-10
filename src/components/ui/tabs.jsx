import React, { createContext, useContext, useState } from "react"

const TabsContext = createContext({})

// UPDATED: Now accepts 'value' and 'onValueChange' to work with your AuthModal
const Tabs = ({ value, onValueChange, defaultValue, className, children }) => {
  // Internal state for when the parent doesn't control the tabs
  const [internalState, setInternalState] = useState(defaultValue)

  // Decide: Are we controlled by the parent (AuthModal) or using internal state?
  const isControlled = value !== undefined
  const activeTab = isControlled ? value : internalState
  const setActiveTab = isControlled ? onValueChange : setInternalState

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

const TabsList = ({ className, children }) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500 ${className}`}>
    {children}
  </div>
)

const TabsTrigger = ({ value, className, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext)
  const isActive = activeTab === value
  
  return (
    <button
      type="button" // Added type="button" to prevent form submission on click
      onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
      ${isActive ? "bg-white text-slate-950 shadow-sm" : "hover:bg-slate-200/50"} ${className}`}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ value, className, children }) => {
  const { activeTab } = useContext(TabsContext)
  if (activeTab !== value) return null
  return <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}>{children}</div>
}

export { Tabs, TabsList, TabsTrigger, TabsContent }