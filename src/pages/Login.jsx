import { LoginForm } from "@/components/login-form"

export default function Login() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-black text-white">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-between p-10 ">
        
        <div>
          <h1 className="text-4xl font-bold text-primary">
            InfluScore
          </h1>
          <p className="mt-2 text-gray-300">
            Level Up Your Creator Journey
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-64 h-64 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center">
            <span className="text-pink-400 text-xl">✨</span>
          </div>
        </div>

        <p className="text-xs text-gray-400">
          © 2024 InfluScore Technology
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>

    </div>
  )
}