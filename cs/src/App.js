import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from '../src/Components/Pages/Courses'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
          <Route path='/' element={<Courses/> }></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
