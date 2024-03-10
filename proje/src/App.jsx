import { useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import { useNavigate } from 'react-router-dom'



function App() {
  const [user, setUser] = useState(null)
  const navigate=useNavigate()

  const handleLogin=()=>{
    const user={id:1, name:"Büşra"}
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/')


  }
  const handleLogOut=()=>{
    localStorage.removeItem('user')
    setUser(null)
    
  } 

  return (
    <>
     <div className='container'>
        <img src="https://www.bursa.bel.tr/dosyalar/image/4A.jpg" height="100px" width="100%" />
        </div> 
      
    <Navbar handleLogOut={handleLogOut} user={user}/>


    
    <div className='container'>
      <div className='col-sm-10'>
        <SiteRoutes handleLogin={handleLogin}/>
        

      </div>

    </div>
    <div className='container'>
        <img src="https://www.besasekmek.com.tr/upload/banner/banner_vf4m146as3.jpg" height="100%" width="100%" />
        </div>
   
 
    </>
  )
}

export default App
