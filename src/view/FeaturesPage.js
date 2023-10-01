import React from 'react';
import './FeaturesPage.css'; // Import your CSS for this page
import Feature from './Feature'; // Create a separate Feature component for each feature

function FeaturesPage() {
  return (
    <div className="features-page">
      <h1>Features</h1>
      <div className="feature-scroll-container">
        {/* Create separate Feature components for each feature */}
        <Feature
          title="Feature 1"
          description="Description for Feature 1"
        />
        <Feature
          title="Feature 2"
          description="Description for Feature 2"
        />
        {/* Add more Feature components as needed */}
      </div>
    </div>
  );
}

export default FeaturesPage;
