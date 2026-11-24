import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatSalary(salary) {
  const salaryText = String(salary ?? "").trim()
  return /^\d+(?:\.\d+)?$/.test(salaryText) ? `${salaryText} LPA` : salaryText
}
