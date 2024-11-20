import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap CSS



const Medialinks = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-4">
          <h4>Join the conversation</h4>
          <div className="d-flex justify-content-center mt-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medialinks;
