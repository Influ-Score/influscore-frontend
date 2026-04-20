import { Button } from "@/components/ui/button"
import { useState } from "react"
import { GrConnect } from "react-icons/gr"
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa"
import { SocialIcon } from 'react-social-icons'


export default function Platforms() {
  const [showPlatforms, setShowPlatforms] = useState(false)
  const [connected, setConnected] = useState({})

  const platforms = [
    { id: "instagram", name: "Instagram", url: "https://instagram.com" },
    { id: "youtube", name: "YouTube", url: "https://youtube.com" },
    { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com" },
    { id: "twitter", name: "X (Twitter)", url: "https://twitter.com" },
  ]

  const handleConnect = (platform) => {
    const mockData = {
      name: "Test User",
      username: "@Username",
      followers: "12.4K",
      views: "120K",
      profilePic: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 10)}`
    }

    setConnected((prev) => ({
      ...prev,
      [platform.id]: { ...platform, ...mockData }
    }))
  }

  if (!showPlatforms) {
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

        <Button
          className="bg-primary text-primary-foreground px-6"
          onClick={() => setShowPlatforms(true)}
        >
          Connect Socials
        </Button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Your Platforms
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {platforms.map((platform) => {
          const data = connected[platform.id]

          return (
            <div
              key={platform.id}
              className="border rounded-xl p-4 bg-card text-card-foreground shadow-sm"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg">{platform.icon}</div>
                <span className="text-xs text-muted-foreground">
                  {data ? "Connected" : "Not Connected"}
                </span>
              </div>

              {/* Connected View */}
              {data ? (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={data.profilePic}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="font-medium text-sm">{data.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {data.username}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs mb-3">
                    <div>
                      <p className="text-muted-foreground">Followers</p>
                      <p className="font-medium">{data.followers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Views</p>
                      <p className="font-medium">{data.views}</p>
                    </div>
                  </div>

                  <Button variant="secondary" className="w-full text-xs bg-primary">
                    Manage
                  </Button>
                </>
              ) : (
                <Button
                  className="w-full text-xs"
                  onClick={() => handleConnect(platform)}
                >
                  Connect {platform.name}
                </Button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}