import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './layout/home'
import Basket from './components/basket'


function App() {
  return (

      <Router>
            <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="basket" element={<Basket/>}/>


              </Routes>

      </Router>
      

  )
}

export default App