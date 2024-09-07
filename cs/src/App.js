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


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
          <Route path='/Courses' element={<Courses/> }></Route>
          <Route path='/' element={<Home/> }></Route>
          <Route path='/Signup' element={<Signup/> }></Route>
          <Route path='/Login' element={<Login/> }></Route>
          <Route path='/Lectures' element={<Lectures/> }></Route>
          <Route path='/Discussion' element={<Discussion/>}></Route>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
