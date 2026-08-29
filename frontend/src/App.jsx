import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import ContactFormPage from './pages/ContactFormPage'


function App() {

  return (
    <BrowserRouter> 
      <Routes>

        <Route path='/contact' element={ <ContactPage /> }  />
        <Route path='/form' element={ <ContactFormPage /> }  />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
