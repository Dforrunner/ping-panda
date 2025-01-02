import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface Props {
  className?: string
  children: ReactNode
}
export function MaxWidthWrapper({ className, children }: Props) {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  )
}
