import './App.css'
import './comps/Landing Page/styles.css'
import './comps/Blog/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './comps/Landing Page/LandingPage'
import Blog from './comps/Blog/Blog'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/Gems-Clone/' element={<LandingPage />}></Route>
        <Route path='/Gems-Clone/blog' element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App