import React from 'react';
import Home from './pages/Home';
import Success from './pages/Success';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";





const App = () => {
  return (
     <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        />
      </Routes>
     </BrowserRouter>

     </>
  )
}

export default App;