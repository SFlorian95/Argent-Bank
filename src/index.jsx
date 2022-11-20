import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './app/App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, //  If "always", the query will always re-fetch in the background on window focus.
      refetchOnmount: false, //  If true, the query will re-fetch on mount if the cached data is stale.
      refetchOnReconnect: false, // Defaults to true . If true, the query will re-fetch on reconnect if the cached data is stale
      retry: 1, // If set to a number, failed queries will retry until the failed query count reaches that number.
      staleTime: 5 * 1000, // The time in milliseconds after data becomes stale.
    },
  },
})
const app = ReactDOM.createRoot(document.getElementById('app'))

app.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
)
