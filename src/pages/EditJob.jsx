import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostJob.css'; // reuse same styles

const EditJob = () => {
  const { id } = useParams(); // job ID from URL
  const [role, setRole] = useState('');
  const [jobData, setJobData] = useState({
    title: 'Senior Frontend Developer',
    description: 'Edit the job description here...',
    location: 'Remote',
    type: 'remote',
    salary: '$80k - $100k'
  });

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    setRole(savedRole);
    // ❗ In real app: fetch job by ID here from API
  }, [id]);

  if (role !== 'employer') {
    return (
      <div className="neumorphic-card" style={{ margin: '50px auto', maxWidth: '500px' }}>
        <h3>Only Employers can edit jobs.</h3>
      </div>
    );
  }

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: '#e0e5ec' }}>
      <div className="neumorphic neumorphic-card">
        <h2 className="mb-4">Edit Job</h2>

        <input
          type="text"
          name="title"
          className="neumorphic-input"
          value={jobData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="neumorphic-input"
          rows={4}
          value={jobData.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="location"
          className="neumorphic-input"
          value={jobData.location}
          onChange={handleChange}
        />
        <select
          name="type"
          className="neumorphic-input"
          value={jobData.type}
          onChange={handleChange}
        >
          <option value="">Select Job Type</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
        <input
          type="text"
          name="salary"
          className="neumorphic-input"
          value={jobData.salary}
          onChange={handleChange}
        />

        <button className="neumorphic-button mt-3">Update Job</button>
      </div>
    </div>
  );
};

export default EditJob;
