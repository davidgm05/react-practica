import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from "./components/homePage"
import NotFoundPage from "./components/NotFoundPage"
import RegisterPage from "./components/RegisterPage"

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />}></Route>
       <Route path="/register" element={<RegisterPage />}></Route>
       <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
