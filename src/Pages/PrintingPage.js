import React from "react";
import "../Styles/PrintingServices.css"; // Or use Tailwind instead

function PrintingServices() {
  return (
    <div className="printing-container">
      <h1>🖨️ Printing Services</h1>

      <section>
        <h2>Common Types of Printing Services</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marketing Materials</td>
              <td>Business cards, flyers, brochures, posters, banners</td>
            </tr>
            <tr>
              <td>Office Printing</td>
              <td>Letterheads, envelopes, invoices, notepads</td>
            </tr>
            <tr>
              <td>Promotional Items</td>
              <td>T-shirts, mugs, pens, bags</td>
            </tr>
            <tr>
              <td>Event Printing</td>
              <td>Wedding cards, invitations, thank-you cards</td>
            </tr>
            <tr>
              <td>Photo Printing</td>
              <td>Photo books, canvas prints, photo albums</td>
            </tr>
            <tr>
              <td>Packaging</td>
              <td>Labels, stickers, product boxes</td>
            </tr>
            <tr>
              <td>Large Format</td>
              <td>Hoardings, flex banners, wall graphics</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>🧰 Technologies Used</h2>
        <ul>
          <li><strong>Digital Printing</strong> – Fast and ideal for short runs</li>
          <li><strong>Offset Printing</strong> – Great for bulk printing with color accuracy</li>
          <li><strong>Screen Printing</strong> – Best for custom apparel and merch</li>
          <li><strong>UV Printing</strong> – Prints on surfaces like acrylic, glass, metal</li>
          <li><strong>Sublimation</strong> – Used for printing on fabrics and coated surfaces</li>
        </ul>
      </section>

      <section>
        <h2>🏪 Who Uses Printing Services?</h2>
        <ul>
          <li>Businesses – For branding & marketing</li>
          <li>Schools & Institutions – Certificates, journals, ID cards</li>
          <li>Individuals – Custom gifts & invites</li>
          <li>Event Planners – Signage, banners, backdrops</li>
        </ul>
      </section>
    </div>
  );
}

export default PrintingServices;

