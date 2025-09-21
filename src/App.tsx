import { Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import {HelpPage} from "./pages/HelpPage";
import HomePage from "./pages/homePage";

function App() {


   return (
  <div>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/help' element={<HelpPage/>}/>
  
</Routes>
  </div>
  )
 
}

export default App;
