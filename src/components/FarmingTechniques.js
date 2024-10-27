// src/components/FarmingTechniques.js
import React from 'react';
import './FarmingTechniques.css'; // Make sure to create a CSS file for stylin
import { motion } from 'framer-motion';

const FarmingTechniques = () => {
  return (
    <motion.div
      className="techniques"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className="farming-techniques">
      <h2>Farming Techniques to Avoid Parali Burning</h2>
      <p>
        Parali burning is a common practice among farmers, but it has significant environmental and health impacts. Here are some sustainable farming techniques that can help reduce or eliminate the need for burning Parali.
      </p>

      <h3>1. Crop Rotation</h3>
      <p>
        Rotating crops can improve soil health and reduce the buildup of pests and diseases. Incorporating legumes in the rotation can also add nitrogen to the soil, enhancing fertility and reducing the need for chemical fertilizers.
      </p>

      <h3>2. Mulching</h3>
      <p>
        Covering the soil with organic matter like straw or grass clippings can help retain moisture, suppress weeds, and improve soil structure. This practice reduces the need for burning leftover stubble.
      </p>

      <h3>3. Composting</h3>
      <p>
        Farmers can convert Parali into compost. This not only adds organic matter back to the soil but also enhances its fertility and structure. Composting can be a valuable resource for improving soil health and reducing waste.
      </p>

      <h3>4. No-Till Farming</h3>
      <p>
        Adopting no-till or reduced-till farming practices minimizes soil disturbance, which helps preserve soil structure and health. This method can reduce the need for burning leftover crop residues.
      </p>

      <h3>5. Machinery Use</h3>
      <p>
        Investing in machinery that can handle crop residues, such as choppers and mulchers, allows farmers to manage stubble without burning. These machines help incorporate the residues back into the soil.
      </p>

      <h3>6. Government Incentives</h3>
      <p>
        Many state governments offer incentives and subsidies for farmers who adopt sustainable practices. Participating in these programs can help offset costs and encourage environmentally friendly farming techniques.
      </p>

      <h3>Conclusion</h3>
      <p>
        Implementing these farming techniques can significantly reduce the practice of Parali burning, leading to better soil health, improved crop yields, and a cleaner environment. It is crucial for farmers to explore these sustainable options to promote agricultural sustainability.
      </p>
    </div>
    </motion.div>
  );
};

export default FarmingTechniques;
