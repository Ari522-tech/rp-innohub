import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const SelectContext = createContext(null);

export const Select = ({ children, onValueChange, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "");
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState(""); // To store the display text of selected item

  const handleSelect = (newValue, newLabel) => {
    setValue(newValue);
    setLabel(newLabel);
    if (onValueChange) onValueChange(newValue);
    setOpen(false);
  };

  return (
    <SelectContext.Provider value={{ value, handleSelect, open, setOpen, label, setLabel }}>
      <div className="relative inline-block w-full text-left">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export const SelectTrigger = ({ children, className }) => {
  const { open, setOpen } = useContext(SelectContext);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={`flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-rp-blue focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
};

export const SelectValue = ({ placeholder }) => {
  const { value, label } = useContext(SelectContext);
  return (
    <span className="block truncate">
      {value ? label : placeholder}
    </span>
  );
};

export const SelectContent = ({ children, className }) => {
  const { open, setOpen } = useContext(SelectContext);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div 
      ref={ref}
      className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 mt-1 w-full ${className}`}
    >
      <div className="p-1">{children}</div>
    </div>
  );
};

export const SelectItem = ({ children, value, className }) => {
  const { value: selectedValue, handleSelect, setLabel } = useContext(SelectContext);
  const isSelected = selectedValue === value;
  const ref = useRef(null);

  // If this item is the default selected value, set the label on mount
  useEffect(() => {
    if (isSelected) {
      setLabel(children); // Set the display label
    }
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => handleSelect(value, children)}
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-slate-100 cursor-pointer ${className}`}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4 text-rp-blue" />}
      </span>
      <span className="truncate">{children}</span>
    </div>
  );
};