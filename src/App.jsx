
import Theme from "./components/Theme"
import Home from "./pages/Home"
import RepoPage from "./pages/RepoPage"
import { Route, Routes } from "react-router-dom"

const App = ()=> {

  return(<div>
    <Theme/>
    <div className="app-container">
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<RepoPage />} />
      </Routes>
      </div>
  </div>)
}

export default App