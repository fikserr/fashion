import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './layout/home'
import Basket from './components/basket'
import Detail from './components/detail'
import Error from './pages/error'
import Menu from './components/menu'


function App() {
  return (

      <Router>
            <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="basket" element={<Basket/>}/>
                  <Route path="detail/:id" element={<Detail/>}/>
                  <Route path="menu" element={<Menu/>}/>
                  <Route path='/notfound' element={<Error/>} />
                  <Route path='/*' element={<Error/>} />


                  

              </Routes>

      </Router>
      

  )
}

export default App