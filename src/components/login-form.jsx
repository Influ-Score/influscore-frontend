import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export function LoginForm() {
  const navigate = useNavigate()

  const [role, setRole] = useState("creator")

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})
  const [redirectData, setRedirectData] = useState(null)

  //  changing roles
  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole)
  }

  //  changing input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    setErrors({
      ...errors,
      [e.target.name]: "",
    })
  }

  // validations
  const validate = () => {
    let newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.password) {
      newErrors.password = "Please enter password"
    }

    return newErrors
  }

  // Login using email and pass
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})

      const payload = {
        ...formData,
        role,
      }

      console.log("Form Login:", payload)

      //  redirect with form data
      setRedirectData(payload)
    }
  }

  //Google auth
  const handleGoogleLogin = async () => {
    try {
      // api call here for google auth
      const response = {
        email: "googleuser@gmail.com",
        name: "Google User",
        role: role,
      }

      console.log("Google Login:", response)

      //redirect using API data
      setRedirectData(response)

    } catch (error) {
      console.error("Google login failed", error)
    }
  }

  if (redirectData) {
    return (
      <Navigate
  to="/landingpage"
  state={redirectData}
/>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-sm text-primary">
          Sign in to manage your professional influence profile.
        </p>
      </div>

      <div className="flex bg-muted p-1 rounded-full">
        <button
          type="button"
          onClick={() => handleRoleChange("creator")}
          className={`flex-1 py-2 rounded-full text-sm ${
            role === "creator"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground"
          }`}
        >
          Creator
        </button>

        <button
          type="button"
          onClick={() => handleRoleChange("brand")}
          className={`flex-1 py-2 rounded-full text-sm ${
            role === "brand"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground"
          }`}
        >
          Brand
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <label>Email</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label>Password</label>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="text-xs text-red-500">{errors.password}</span>
        )}
      </div>

      <div className="flex items-center gap-2 text-gray-500 text-xs">
        <div className="flex-1 h-px bg-gray-700" />
        OR
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center gap-2"
        onClick={handleGoogleLogin}
      >
        <img src="/google.svg" alt="Google" className="w-4 h-4" />
        Continue with Google
      </Button>

      <Button type="submit" className="w-full">
        Sign In
      </Button>

        <p className="text-center text-sm text-gray-400">
        Don’t have an account?{" "}
        <span
  onClick={() => navigate("/signup")}
  className="text-primary cursor-pointer"
>
  Sign up
</span>
      </p>

    </form>
  )
}