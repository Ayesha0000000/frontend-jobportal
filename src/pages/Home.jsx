import React, { useState } from 'react';
import defaultProfile from '../assets/default-user.png';
import './Home.css';

const Home = () => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Lahore',
      type: 'Remote',
      salary: '80k–100k',
      poster: {
        name: 'Ayesha Khan',
        photo: 'https://i.pravatar.cc/50?img=5'
      }
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'DevSoft',
      location: 'Remote',
      type: 'Onsite',
      salary: '100k–120k',
      poster: {
        name: 'Ali Raza',
        photo: ''
      }
    }
  ];

  const handleLike = (jobId) => {
    setLikes((prev) => ({ ...prev, [jobId]: (prev[jobId] || 0) + 1 }));
  };

  const handleCommentChange = (jobId, value) => {
    setComments((prev) => ({ ...prev, [jobId]: value }));
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Find Your Dream Job</h1>
          <p>Explore thousands of jobs and connect with top employers.</p>
        </div>
      </div>

      <div className="container py-4">
        {/* Job Cards */}
        {jobs.map((job) => (
          <div className="card mb-4 shadow-sm" key={job.id}>
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <img
                  src={job.poster.photo || defaultProfile}
                  alt="Poster"
                  className="rounded-circle me-2"
                  style={{ width: '40px', height: '40px' }}
                />
                <strong>{job.poster.name}</strong>
              </div>

              <h5>{job.title}</h5>
              <p className="mb-1"><strong>Company:</strong> {job.company}</p>
              <p className="mb-1"><strong>Location:</strong> {job.location}</p>
              <p className="mb-1"><strong>Type:</strong> {job.type}</p>
              <p className="mb-1"><strong>Salary:</strong> {job.salary}</p>

              <div className="d-flex gap-2 mt-3">
                <a href={`/job/${job.id}`} className="btn btn-outline-primary btn-sm">View</a>
                <button className="btn btn-outline-success btn-sm">⭐ Save Job</button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleLike(job.id)}>
                  ❤️ {likes[job.id] || 0}
                </button>
              </div>

              {/* Comment Input */}
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment..."
                  value={comments[job.id] || ''}
                  onChange={(e) => handleCommentChange(job.id, e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
