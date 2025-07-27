import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();

  return (
    <div className="container py-5">
      <div className="card p-4 shadow-sm">
        <h3>Senior Frontend Developer</h3>
        <p className="text-muted">Company: TechCorp</p>
        <p><strong>Location:</strong> Remote</p>
        <p><strong>Type:</strong> Remote</p>
        <p><strong>Salary:</strong> $70k–90k</p>
        <p><strong>Description:</strong> We are looking for a React Developer...</p>
        <button className="btn btn-success">Apply Now</button>

        <hr />
        <div>
          <h5>❤️ Likes: 10</h5>
          <button className="btn btn-outline-danger btn-sm">Like</button>
        </div>

        <hr />
        <div>
          <h5>💬 Comments</h5>
          <textarea className="form-control mb-2" placeholder="Write a comment..."></textarea>
          <button className="btn btn-primary btn-sm">Post Comment</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
