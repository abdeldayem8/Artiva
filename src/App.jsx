import { Outlet } from 'react-router-dom'
import './App.css'
import Navitems from './components/common/Navitems'

function App() {
  

  return (
    <>
     <Navitems/>
     <Outlet/>
    </>
  )
}

export default App
