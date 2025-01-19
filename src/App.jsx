import { BrowserRouter, Routes, Route } from "react-router-dom"
import EventDetails from "./pages/EventDetails"
import EventList from "./pages/EventList"
import CreateEvent from "./pages/CreateEvent"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import CategoryPage from "./pages/CategoryPage"
import "./App.css"
function App() {

 

  return (
    <BrowserRouter>
    <NavBar />
     <Routes>
     <Route index element= {<Home />}/>
     <Route path ="/event/:id" element = {<EventDetails /> }/>
     <Route path="/list" element= {<EventList />} />
     <Route path="/category/:category" element={<CategoryPage />} />
     <Route path="/new" element= {<CreateEvent />}/>
      </Routes> 
      
    </BrowserRouter>
  )
}

export default App
