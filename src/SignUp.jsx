import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedText from './components/text'

const TerminalIcon = () => (
  <svg
    xmlns="http://2000.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[#1cd41c]"
  >
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
)

const SignUp = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      // Login logic
      console.log('Login submitted:', { username, password })
    } else {
      // Signup logic
      console.log('Signup submitted:', { username, email, password })
    }
  }

  return (
    <div className="flex min-h-screen min-w-[320px] items-center justify-center bg-[#111111] font-['Orbitron'] text-white">
      <div className="before:animate-border-shine relative flex w-[350px] animate-border flex-col items-center rounded-lg border-2 border-transparent bg-[#1a1a1a] p-8 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-[#1cd41c] before:to-transparent">
        <div className="mb-6 flex animate-float items-center gap-2">
          <TerminalIcon />
          <AnimatedText
            text="Enigma25"
            className="text-3xl font-bold tracking-wider text-[#1cd41c] drop-shadow-enigma-glow"
            time={1.0}
          />
        </div>

        <div className="mb-4 flex">
          <button
            onClick={() => setIsLogin(true)}
            className={`mr-4 ${isLogin ? 'text-[#1cd41c]' : 'text-gray-500'} transition-transform duration-300 hover:scale-105`}
          >
            <AnimatedText text="Login" time={1.0} />
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`${!isLogin ? 'text-[#1cd41c]' : 'text-gray-500'} transition-transform duration-300 hover:scale-105`}
          >
            <AnimatedText text="Sign Up" time={1.0} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          {!isLogin && (
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

          <InputField
            label="Username"
            type="text"
            placeholder={isLogin ? 'Enter your username' : 'Choose a username'}
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputField
            label="Password"
            type="password"
            placeholder={isLogin ? 'Enter your password' : 'Choose a password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-lg border-2 border-[#1cd41c] bg-transparent px-4 py-3 text-[#1cd41c] transition-colors duration-300 hover:scale-105 hover:bg-[#1cd41c] hover:text-white active:scale-95"
          >
            <AnimatedText text={isLogin ? 'Login' : 'Sign Up'} time={1.0} />
          </button>
        </form>

        {isLogin && (
          <div className="mt-4 text-sm text-gray-400">
            <AnimatedText
              text="Don't have an account?"
              time={1.0}
              className="inline"
            />
            <button
              onClick={() => setIsLogin(false)}
              className="ml-2 text-[#1cd41c] transition-transform duration-300 hover:scale-105 hover:underline"
            >
              <AnimatedText text="Sign Up" time={1.0} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// InputField component (inline to avoid import issues)
const InputField = ({
  label,
  type,
  placeholder,
  required,
  value,
  onChange
}) => {
  return (
    <div className="mb-4">
      <AnimatedText
        text={label}
        className="mb-2 block text-sm text-gray-300"
        time={1.0}
      />
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded border border-[#1cd41c] bg-[#2c2c2c] px-3 py-2 text-white transition-all duration-300 hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_5px_15px_rgba(28,212,28,0.4)] focus:translate-y-[-5px] focus:scale-105 focus:border-[#1cd41c] focus:outline-none focus:ring-1 focus:ring-[#1cd41c] active:scale-95"
      />
    </div>
  )
}

export default SignUp
