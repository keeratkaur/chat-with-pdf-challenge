"use client"

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"

function AnalyseButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Analyzing..." : "Analyze"}
    </Button>
  )
}

export default AnalyseButton; 