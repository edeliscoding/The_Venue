import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6135.347920517664!2d-104.99632220812165!3d39.74697407037523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78da84638e1d%3A0x48f5275b57774d37!2s16th%20Street%20Mall!5e0!3m2!1sen!2sus!4v1617943260677!5m2!1sen!2sus"
        width="100%"
        height="500px"
        allowFullScreen=""
        frameBorder="0"
        loading="lazy"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
