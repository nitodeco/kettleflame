import { useState } from 'react'
import ViteLogo from '@assets/icons/vite.svg'
import '@styles/template.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={ViteLogo} alt="" id="vite-logo" />
      <h1>Virety</h1>
      <h2>Vite + React + Typescript</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Visit{' '}
          <a href="https://github.com/nitodeco/virety" target="_blank">
            Github
          </a>{' '}
          for more information
        </p>
      </div>
    </>
  )
}

export default App
