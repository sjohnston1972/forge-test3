import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="card">
      <div className="badge">React + TypeScript + Vite</div>
      <h1>Hello, World! 👋</h1>
      <p>A tiny app built with JavaScript, React, and TypeScript.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        You clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </div>
  )
}

export default App
