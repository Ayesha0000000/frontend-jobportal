import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NeumorphicLogin from './pages/NeumorphicLogin'; // ✅ new login form
import NeumorphicRegister from './pages/NeumorphicRegister';
import PostJob from './pages/PostJob';
import JobDetail from './pages/JobDetail';
import EditJob from './pages/EditJob';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import ProfileForm from './pages/ProfileForm';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<NeumorphicLogin />} /> {/* ✅ updated here */}
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/register" element={<NeumorphicRegister />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
