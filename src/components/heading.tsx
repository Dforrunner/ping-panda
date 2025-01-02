import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}
export function Heading({ children, className, ...props }: Props) {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zing-800",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
