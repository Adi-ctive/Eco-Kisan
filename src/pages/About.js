// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Us</h2>
      <motion.p
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        This initiative focuses on the innovative use of drone technology to survey the Parali region, aiming to enhance environmental monitoring and resource management. By equipping drones with high-resolution cameras and advanced sensors, detailed aerial imagery is captured to assess the health of ecosystems, track land use changes, and identify potential environmental hazards. Utilizing machine learning algorithms, this real-time data is analyzed to detect irregularities such as illegal land clearing or shifts in biodiversity. In the event of any anomalies, automated alerts are dispatched to relevant officials, facilitating timely interventions and promoting sustainable development. This approach strives to bolster conservation efforts and ensure the responsible management of the Parali region's natural resources.
      </motion.p>
      <motion.p
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Our mission is to leverage cutting-edge drone technology and data analysis to foster sustainable development and environmental conservation in the Parali region. We are committed to providing timely and accurate information that empowers local authorities and stakeholders to make informed decisions. By enhancing surveillance capabilities and promoting proactive management of natural resources, we aim to protect the region's biodiversity, prevent illegal activities, and support the well-being of the community. Together, we strive for a healthier, more resilient environment for future generations.
      </motion.p>
    </motion.div>
  );
};

export default About;
