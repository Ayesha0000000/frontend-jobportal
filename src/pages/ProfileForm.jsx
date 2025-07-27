import React, { useState, useEffect } from 'react';

const ProfileForm = () => {
  const role = localStorage.getItem('userRole'); // employer / jobseeker
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    companyName: '',
    skills: '',
    resume: null,
    profilePic: null,
    companyLogo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // submit to API
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        {role === 'employer' ? (
          <>
            <input className="form-control mb-3" type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
            <input className="form-control mb-3" type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
            <input className="form-control mb-3" type="file" name="companyLogo" accept="image/*" onChange={handleChange} />
          </>
        ) : (
          <>
            <input className="form-control mb-3" type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
            <input className="form-control mb-3" type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
            <input className="form-control mb-3" type="file" name="profilePic" accept="image/*" onChange={handleChange} />
            <input className="form-control mb-3" type="text" name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
            <input className="form-control mb-3" type="file" name="resume" accept=".pdf" onChange={handleChange} />
          </>
        )}
        <button type="submit" className="btn btn-primary">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
