import React, { useState } from 'react';

const PostJob = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    type: '',
    salary: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
    // API call to post job
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <input className="form-control mb-3" name="title" placeholder="Job Title" onChange={handleChange} />
        <textarea className="form-control mb-3" name="description" placeholder="Job Description" rows="5" onChange={handleChange}></textarea>
        <input className="form-control mb-3" name="location" placeholder="Location" onChange={handleChange} />
        <select className="form-select mb-3" name="type" onChange={handleChange}>
          <option value="">Select Job Type</option>
          <option>Remote</option>
          <option>Onsite</option>
        </select>
        <input className="form-control mb-3" name="salary" placeholder="Salary Range" onChange={handleChange} />
        <button className="btn btn-primary">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
