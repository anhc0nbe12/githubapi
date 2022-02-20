import NavbarCustom from './components/layout/NavbarCustom'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Notfound from './pages/Notfound'
import User from './pages/User'
import Alert from './components/layout/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UsersProvider } from './context/github/UserContext'
import { AlertProvider } from './context/alert/AlertContext'
function App() {
  return (
    <UsersProvider>
      <AlertProvider>
        <Router>
          <div className="d-flex flex-column justify-content-between vh-100 ">
            <NavbarCustom />
            <main className="container">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/Notfound" element={<Notfound />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </UsersProvider>
  )
}

export default App
