import { useState } from 'react'
import ViteLogo from '@assets/icons/vite.svg'
import '@styles/template.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={ViteLogo} alt="" id="vite-logo" />
      <h1>Virety</h1>
      <h2>
        <a href="https://vitejs.dev/" target="_blank">
          Vite
        </a>{' '}
        +{' '}
        <a href="https://react.dev/" target="_blank">
          React
        </a>{' '}
        +{' '}
        <a href="https://www.typescriptlang.org/" target="_blank">
          Typescript
        </a>
      </h2>
      <h4 id="additional-tools">
        Augmented by{' '}
        <a href="https://sass-lang.com/" target="_blank">
          Sass
        </a>{' '}
        and{' '}
        <a href="https://axios-http.com/" target="_blank">
          Axios
        </a>
      </h4>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR. Visit{' '}
          <a href="https://github.com/nitodeco/virety" target="_blank">
            Github
          </a>{' '}
          for more information.
        </p>
      </div>
    </>
  )
}

export default App
