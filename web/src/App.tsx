import { StartView } from './views/start/start.view'

import './index.css'

function App() {
  return (
    <main className="container mx-auto">
      <header className="flex flex-col items-center">
        <h1 className="text-9xl">ATOFE</h1>
        <h3>- A Tale of Five Emojis -</h3>
      </header>
      <StartView />
      <footer>
        <p>test test test</p>
      </footer>
    </main>
  )
}

export default App
