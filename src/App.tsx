import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Home from './views/Home/Home'
import About from './views/About/About'
import Work from './views/Work/Work'
import Resume from './views/Resume/Resume'

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='*' element={<h1>404</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
