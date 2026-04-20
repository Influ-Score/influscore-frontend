import { SignupForm } from "@/components/signup-form"

export default function Signup() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-black text-white">
      
      <div className="hidden lg:flex flex-col justify-between p-10">
        <div>
          <h1 className="text-4xl font-bold text-primary">
            InfluScore
          </h1>
          <p className="mt-2 text-gray-300">
            Start Your Creator Journey
          </p>
        </div>
{/* 
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center">
            <span className="text-primary text-xl">IMAGES</span>
          </div>
        </div> */}

        <p className="text-xs text-gray-400">
          © 2024 InfluScore Technology
        </p>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </div>

    </div>
  )
}