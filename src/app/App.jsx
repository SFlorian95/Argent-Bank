import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../common/Layout'
import RequireAuth from '../features/auth/RequireAuth'
import Home from '../common/Home/Home'
import Header from '../common/Header/Header'
import Error from '../common/Error/Error'
import Footer from '../common/Footer/Footer'
import Login from '../features/auth/Login/Login'
import Profile from '../features/profile/Profile/Profile'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Error routes */}
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
    <Footer />
  </Router>
)

export default App
