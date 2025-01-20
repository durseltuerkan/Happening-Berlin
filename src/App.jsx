import { BrowserRouter, Routes, Route } from "react-router-dom"
import EventDetails from "./pages/EventDetails"
import EventList from "./pages/EventList"
import CreateEvent from "./pages/CreateEvent"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import CategoryPage from "./pages/CategoryPage"
import NotFoundPage from "./pages/NotFoundPage"
import FooterPage from "./pages/FooterPage"
import "./App.css"
function App() {

 

  return (
    <BrowserRouter>
    <NavBar />
    <main>
     <Routes>
     <Route index element= {<Home />}/>
     <Route path ="/event/:id" element = {<EventDetails /> }/>
     <Route path="/list" element= {<EventList />} />
     <Route path="/category/:category" element={<CategoryPage />} />
     <Route path="/new" element= {<CreateEvent />}/>
     <Route path="*" element= {<NotFoundPage />} />
     </Routes> 
    </main>
    <FooterPage />
      
    </BrowserRouter>
  )
}

export default App
