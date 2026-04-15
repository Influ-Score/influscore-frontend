import { Button } from "@/components/ui/button"
import { Plug } from "lucide-react"
import { GrConnect } from "react-icons/gr"

export default function Platforms() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center gap-6 text-center">

      <GrConnect className="h-12 w-12 text-primary" />

      <div>
        <h2 className="text-xl font-semibold">
          Connect Your Socials
        </h2>
        <p className="text-sm text-muted-foreground">
          You haven’t connected any social platforms yet.
        </p>
      </div>

      <Button className="bg-primary text-primary-foreground px-6">
        Connect Socials
      </Button>

    </div>
  )
}