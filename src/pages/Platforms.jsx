import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plug } from "lucide-react"
import { GrConnect } from "react-icons/gr"

export default function Platforms() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("You haven’t connected any social platforms yet.")

  const handleConnectSocials = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/connect-socials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: "12345" }), // Example payload
      })

      if (response.ok) {
        const data = await response.json()
        setMessage("Social platforms connected successfully!")
      } else {
        setMessage("Failed to connect social platforms.")
      }
    } catch (error) {
      console.error("Error connecting socials:", error)
      setMessage("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-[80vh] flex flex-col items-center justify-center gap-6 text-center">
      <GrConnect className="h-12 w-12 text-primary" />

      <div>
        <h2 className="text-xl font-semibold">
          Connect Your Socials
        </h2>
        <p className="text-sm text-muted-foreground">
          {message}
        </p>
      </div>

      <Button
        className="bg-primary text-primary-foreground px-6"
        onClick={handleConnectSocials}
        disabled={loading}
      >
        {loading ? "Connecting..." : "Connect Socials"}
      </Button>
    </div>
  )
}