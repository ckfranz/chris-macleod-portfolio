import React from "react";

import "./Pricing.css";

const Pricing = (props) => {
  return (
    <div className="page-container">
      <div className="contact-text">
        <h2>Pricing Info</h2>
        <h4>ORIGINALS</h4>
        <span>
          Various pieces from both WILDLIFE PIECES and PASTEL STUDIES are
          currently available as the original, however many have already been
          sold. If interested in purchasing an original, please reach out and I
          can confirm if it's still available, and discuss pricing.
        </span>
        <h4>PRINTS</h4>
        <span>
          PRINT PRICING Beautiful, high quality giclée prints of a variety of
          pieces from the WILDLIFE PIECES page, for a fraction of the cost of
          the originals! All prints are done on heavy duty, acid free,
          cold-pressed paper. Please note that PASTEL STUDIES and PET PORTRAITS
          are NOT available as prints.
          <table>
            <tr>
              <th>SIZE</th>
              <th>PRICE</th>
            </tr>
            <tr>
              <td>5x7"</td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>8x10"</td>
              <td>$75.00</td>
            </tr>
            <tr>
              <td>11x14"</td>
              <td>$125.00</td>
            </tr>
            <tr>
              <td>16x20"</td>
              <td>$150.00</td>
            </tr>
          </table>
          Please feel free to reach out if you are interested in a piece, and I
          will confirm if prints are available for it!
        </span>

        <h4>COMMISSIONS</h4>
        <span>
          COMMISSION PRICING Commissions are available for any subject matter,
          in any of the three styles. This entails an animal of your choice, be
          it wildlife or a beloved pet, in a full colour piece, black and white
          pastel study, or coloured pastel study. These are perfect as a gift
          for any occasion, a fitting memorial, or simply for beautiful
          decoration! Prices vary depending on size, style and time to
          completion, and does not include shipping or framing.
        </span>

        <table>
          <h3>PET PORTRAITS</h3>
          <tr>
            <th>SIZE</th>
            <th>PRICE</th>
            <th>PER ADDITIONAL PET</th>
          </tr>
          <tr>
            <td>5x7"</td>
            <td>$175 </td>
            <td>/</td>
          </tr>
          <tr>
            <td>8x10"</td>
            <td>$225 </td>
            <td>+ $75</td>
          </tr>
          <tr>
            <td>11x14"</td>
            <td>$325 </td>
            <td>+ $100</td>
          </tr>
          <tr>
            <td>16x20"</td>
            <td>$425 </td>
            <td>+ $125</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
