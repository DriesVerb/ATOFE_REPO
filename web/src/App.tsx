import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Entry from './Entry'

const queryClient = new QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Entry />
    </QueryClientProvider>
  )
}

export default App
