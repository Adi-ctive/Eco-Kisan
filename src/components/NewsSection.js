// src/components/NewsSection.js
import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
  { title: "Increase in Stubble Burning", description: "Reports indicate a rise in stubble burning incidents in Punjab and Haryana, with authorities recording over 400 incidents this October, significantly impacting air quality in Delhi." },
  { title: "Government Criticism", description: " The Supreme Court has criticized the Punjab and Haryana governments for failing to effectively manage stubble burning and enforce penalties against violators​." },
  { title: "Monitoring Teams Deployed", description: "The Commission for Air Quality Management (CAQM) has sent teams to hotspots in Punjab and Haryana to monitor stubble burning and ensure compliance with regulations." },
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2>Latest News</h2>
      <div className="news-cards">
        {newsItems.map((news, index) => (
          <motion.div
            key={index}
            className="news-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
