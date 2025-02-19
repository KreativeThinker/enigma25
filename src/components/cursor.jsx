import { useState, useEffect } from 'react'

function MovableSquare() {
  const [positions, setPositions] = useState(Array(10).fill({ x: 0, y: 0 }))

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newPositions = positions.slice(1)
      newPositions.push({ x: event.clientX, y: event.clientY })
      setPositions(newPositions)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [positions])

  return (
    <>
      {positions.map((position, index) => (
        <div
          key={index}
          className="pointer-events-none fixed h-3 w-3 bg-enigma-green mix-blend-difference"
          style={{
            top: position.y,
            left: position.x,
            transition: 'top 0.1s, left 0.1s',
            opacity: 1 - index * 0.1
          }}
        ></div>
      ))}
    </>
  )
}

export default MovableSquare
