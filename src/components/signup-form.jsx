import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { Navigate } from "react-router-dom"

export function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  })

  const [errors, setErrors] = useState({})
  const [redirectData, setRedirectData] = useState(null)

  // handle input
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

  // validation
  const validate = () => {
    let newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email required"
    }

    if (!formData.password) {
      newErrors.password = "Password required"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.role) {
      newErrors.role = "Please select a role"
    }

    return newErrors
  }

  // signup submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    console.log("Signup Data:", formData)

    // call spring boot API here

    setRedirectData(formData)
  }

  // Google signup
  const handleGoogleSignup = () => {
    if (!formData.role) {
      setErrors({ role: "Please select role before Google signup" })
      return
    }

    // call google auth API
    const response = {
      email: "googleuser@gmail.com",
      role: formData.role,
    }

    console.log("Google Signup:", response)

    setRedirectData(response)
  }

  if (redirectData) {
    return <Navigate to="/landingpage" state={redirectData} />
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <h1 className="text-2xl font-bold text-center">Create Account</h1>

      <div>
        <label>Email</label>
        <Input name="email" onChange={handleChange} />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <Input type="password" name="password" onChange={handleChange} />
      </div>

      <div>
        <label>Confirm Password</label>
        <Input type="password" name="confirmPassword" onChange={handleChange} />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
        )}
      </div>

      <div>
        <label>What are you here for?</label>
        <select
          name="role"
          onChange={handleChange}
          className="w-full p-2 rounded bg-black border"
        >
          <option value="">Select Role</option>
          <option value="CREATOR">Creator</option>
          <option value="BRAND">Brand</option>
        </select>

        {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
      </div>

       
      <Button type="submit">Sign Up</Button>

          <div className="flex items-center gap-2 text-gray-500 text-xs">
        <div className="flex-1 h-px bg-gray-700" />
        OR
        <div className="flex-1 h-px bg-gray-700" />
      </div>

        <Button
        type="button"
        variant="outline"
        className="w-full flex items-center gap-2">
        <img src="/google.svg" alt="Google" className="w-4 h-4" />
        Continue with Google
      </Button>


    </form>
  )
}