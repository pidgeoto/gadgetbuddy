import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const SearchField = React.forwardRef(
  ({ className, type, placeholder, ...props }, ref) => {
    return (
      <div className="relative">
        <div className="flex items-center rounded-full">
          <input
            type={type}
            placeholder={placeholder}
            className={cn(
              "flex h-10 rounded-full border border-slate-500 bg-gray-100 px-5 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-300 dark:bg-slate-450 dark:ring-offset-slate-450 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
        </div>
      </div>
    );
  }
);

SearchField.displayName = "SearchField";

export { SearchField };
