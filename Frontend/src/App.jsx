import React from 'react';
import Home from './Home/Home';
import Cources from './cources/cources';
import {Route , Routes} from "react-router-dom";
import Signup from './components/Signup';


function App() {
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Cource" element={<Cources/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
   </div>
    </>
  );
}

export default App;
