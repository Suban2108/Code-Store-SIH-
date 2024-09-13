import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from '../src/Components/Pages/Courses'
import Home from '../src/Components/Pages/Home'
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
import Footer from '../src/Components/Footer/Footer'
import Lectures from '../src/Components/Pages/Lectures'
import Discussion from './Components/Pages/Discussion';
import RoadMap from '../src/Components/Pages/RoadMap'
import Profile from './Components/Pages/Profile';
import Cart from '../src/Components/Pages/Cart'
// import Alerts from '../src/Components/Alert/Alerts'
// import { useState } from 'react';

function App() {
  // const [Alert, setAlert] = useState(null);
  
//  const alert = () => {
//     setAlert({
//     msg: 'Course is Added to Cart',
//     type: 'success'
//   })

//   setTimeout(() => {
//     setAlert(null);
//   }, 2000)
// }

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      {/* <Alerts Alert={Alert} /> */}
      <Routes>
        <Route>
          <Route path='/Courses' element={<Courses/> }></Route>
          <Route path='/' element={<Home/> }></Route>
          <Route path='/Signup' element={<Signup/> }></Route>
          <Route path='/Login' element={<Login/> }></Route>
          <Route path='/Lectures' element={<Lectures/> }></Route>
          <Route path='/Discussion' element={<Discussion/>}></Route>
          <Route path='/Roadmap' element={<RoadMap/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
