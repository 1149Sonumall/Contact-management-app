
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Route,Routes, BrowserRouter  } from 'react-router-dom';
// import Home from './components/Home';
// import Create from './components/Create';
// import Update from './components/Update';
// import Linechart from './components/Linechart';
// import Navbar from './components/Navbar';



// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
      
//       <Route path='/' element={<Home/>}></Route>
//       <Route path='/create' element={<Create/>}></Route>
//       <Route path='/edit/:id' element={<Update/>}></Route>
//       <Route path='/chart' element={<Linechart/>}></Route>


//     </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Linechart from './components/Linechart';
import Contactfrom from './components/Contactfrom';
// import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    
    <Router>
    <Home />
      <div>
      
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Contactfrom />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Update />} />
          <Route path='/chart' element={<Linechart />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;

