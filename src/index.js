import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import store from './app/store'
import Home from './common/Home'
import Error from './common/Error'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from './common/Header'
import Footer from './common/Footer'
import Login from './features/Login'

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
const app = ReactDOM.createRoot(document.getElementById('root'))

app.render(
  <QueryClientProvider client={queryClient}>
    {/* <Provider store={store}> */}
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    {/* </Provider> */}
  </QueryClientProvider>
)
