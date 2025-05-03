import Sport from './Components/Sport'
import Science from './Components/Science'
import { Route, Routes } from 'react-router-dom'
import Notfound from './Error404/NotFound'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
const App=()=>{
  return (
    <>
     <Navbar/>
       <Routes>
          <Route path='/Sport' element={<Sport/>}/>
          <Route path='/Science' element={<Science/>}/>
          <Route path='*' element={<Notfound/>}/>
       </Routes>
      <Footer/>
    </>
  )
}
 
export default App
