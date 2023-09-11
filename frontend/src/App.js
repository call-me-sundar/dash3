import { BrowserRouter } from 'react-router-dom'
import Navber from './Devops.js/Navber'
import SideNavbar from './Devops.js/SideNavbar'
import Routing from './Routing'



function App() {
  return (
   <div>
    <BrowserRouter>
    <div id="wrapper">
      <SideNavbar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Navber/>
        <div className='container-fluid'>
          
        <Routing/>
        

        </div>
      </div>
      </div>
    </div>
    </BrowserRouter>
   </div>
  )
}

export default App