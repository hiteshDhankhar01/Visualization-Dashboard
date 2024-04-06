import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import PageNotFound from './components/PageNotFound';


function App() {

  const navigate = useNavigate(); 

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      navigate('/');
    } else {
      navigate('/signup');
    }
  }, [navigate]); 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>

  );
}

export default App;

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <Routes>
//       <Route path='/' element={<Dashboard />} />
//       <Route path='/dashboard' element={<Dashboard />} />
//       <Route path='/signup' element={<Signup />} />
//       <Route path='/*' element={<PageNotFound />} />
//     </Routes>

//   );
// }

// export default App;



// import { useState } from 'react'

// import './App.css'
// import Signup from './Pages/Signup'
// import Dashboard from './Pages/Dashboard'


// function App() {

//   return (
//     <>
//       <Dashboard />
//     </>
//   )
// }

// export default App
