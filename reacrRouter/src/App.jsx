import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import HomePage from "./components/homePage"
import LoginPage from "./components/loginPage"
import NotFoundPage from "./components/NotFoundPage"

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage />}></Route>
       <Route path="/login" element={<LoginPage />}></Route>
       <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
