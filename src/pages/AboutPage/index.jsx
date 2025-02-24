// About.js

import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="text-lg mb-4">
        Moviewind is a platform designed for movie lovers, offering the best movie recommendations.
        On this site, you can find detailed information, reviews, and personalized suggestions based on your preferences.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Purpose</h2>
      <p className="text-lg mb-4">
        Our goal is to make movie selection easier and help users find the most suitable movies in various genres and categories.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
      <p className="text-lg">
        The Moviewind team consists of several experienced film analysts and designers. Our team is dedicated to keeping users informed with the latest movie news and reviews.
      </p>
    </div>
  );
};

export default About;
