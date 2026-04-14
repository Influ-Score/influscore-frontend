import { Bell } from "lucide-react"
import SearchBar from "./search-bar"
export default function TopNavbar() {
  return (
	<div className="h-14 border-b border-border bg-background flex items-center px-6">

 <div className="flex-1 max-w-xl">
    <SearchBar />
  </div>  <div className="flex items-center gap-5 ml-auto">

        <button className="relative p-2 rounded-full hover:bg-muted transition">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
        </button>

        <div className="flex items-center gap-3 px-2 py-1 rounded-lg hover:bg-muted transition cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="h-9 w-9 rounded-full border border-border"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium">Nitika</span>
            <span className="text-xs text-muted-foreground">Creator</span>
          </div>
        </div>

      </div>
    </div>
  )
}