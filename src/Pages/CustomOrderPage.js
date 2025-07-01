import React from "react";
import "../Styles/CustomeOrder.css";

function CustomOrders() {
  return (
    <div className="custom-container">
      <h1>🛒 Custom Orders</h1>

      <section>
        <h2>What You Can Customize</h2>
        <ul>
          <li>👕 T-Shirts & Hoodies</li>
          <li>☕ Mugs & Water Bottles</li>
          <li>📷 Photo Frames & Albums</li>
          <li>🎉 Birthday & Wedding Gifts</li>
          <li>📦 Packaging & Boxes</li>
        </ul>
      </section>

      <section>
        <h2>Order Process</h2>
        <ul>
          <li>📝 Submit Design / Idea</li>
          <li>📩 Get a Preview & Quote</li>
          <li>✅ Approve & Confirm</li>
          <li>🚚 Get it Delivered!</li>
        </ul>
      </section>

      <section>
        <h2>Why Choose Our Custom Services?</h2>
        <ul>
          <li>🎨 Unique Gifts</li>
          <li>🛠️ High-Quality Material</li>
          <li>🤝 One-on-One Support</li>
        </ul>
      </section>
    </div>
  );
}

export default CustomOrders;
