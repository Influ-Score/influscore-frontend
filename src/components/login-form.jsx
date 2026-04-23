import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../api/authApi"
import { useEffect } from "react"


export function LoginForm() {
  const navigate = useNavigate()

  const [role, setRole] = useState("CREATOR")

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

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "911781622088-hfiocna9svp93rc7b41ku8fl4o1ef7eo.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      })
  
      window.google.accounts.id.renderButton(
        document.getElementById("googleBtn"),
        {
          theme: "outline",
          size: "large",
          width: "100%",
        }
      )
    }
  }, [])

  const handleCredentialResponse = async (response) => {
    try {
      const idToken = response.credential
  
      console.log("REAL Google Token:", response)
  
      const res = await fetch("http://localhost:8080/auth/google/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: idToken,
          role: role
        })
      })
  
      console.log("Google Auth Response:", res)
      if(res.status !== 200) {
        throw new Error("Google authentication failed")
      }
      else {
        const userData = await res.json()

        console.log("Google Auth User Data:", userData.data.token);
  
        localStorage.setItem("token", userData.data.token)
        localStorage.setItem("user", JSON.stringify(userData.data))
    
        setRedirectData(userData)
      }
  
    } catch (error) {
      console.error("Google login failed", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    const validationErrors = validate()
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
  
    setErrors({})
  
    try {
      const res = await loginUser(formData.email, formData.password)
  
      const userData = res.data
  
      if (userData.token) {
        localStorage.setItem("token", userData.token)
      }
  
        
      localStorage.setItem("user", JSON.stringify(userData))
  
      setRedirectData(userData)
  
    } catch (err) {
      setErrors({
        api: err.message || "Login failed"
      })
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
  to="/platforms  "
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
          onClick={() => handleRoleChange("CREATOR")}
          className={`flex-1 py-2 rounded-full text-sm ${
            role === "CREATOR"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground"
          }`}
        >
          Creator
        </button>

        <button
          type="button"
          onClick={() => handleRoleChange("BRAND")}
          className={`flex-1 py-2 rounded-full text-sm ${
            role === "BRAND"
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

      {/* <Button
        type="button"
        variant="outline"
        className="w-full flex items-center gap-2"
        onClick={handleGoogleLogin}
      >
        <img src="/google.svg" alt="Google" className="w-4 h-4" />
        Continue with Google
      </Button> */}
      <div id="googleBtn" className="w-full flex justify-center"></div>

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