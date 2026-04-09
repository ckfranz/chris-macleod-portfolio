import React from "react";
import Layout from "../../components/Layout";
import { ExternalLink } from "lucide-react";

import "./wildlife-commission.css";

const WildlifeCommissions = () => {
  return (
    <Layout>
      <div className="commission-page">
        <h1>Wildlife Commissions</h1>
        <p className="commission-intro">
          Commissions are the perfect way to capture the beauty and spirit of
          wildlife in a one-of-a-kind, handcrafted piece. Here's how the process
          works.
        </p>

        <div className="process-steps">
          {/* Step 1 */}
          <div className="process-step">
            <div className="step-content">
              <div className="step-header">
                <span className="step-number">1</span>
                <h2>Submit an Order Request</h2>
              </div>
              <p>
                If you are interested in ordering a piece, please fill out the
                following form:
              </p>
              <a
                href="https://forms.gle/kJCmQMLiw3nHXypJ6"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Request a Commission <ExternalLink size={13} strokeWidth={1.5} />
              </a>
              <p>
                This form will inquire about a number of important details,
                including: contact information, the size, the style, and a brief
                description of what you are looking for. There will also be a
                section for any questions or additional information.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-step">
            <div className="step-content">
              <div className="step-header">
                <span className="step-number">2</span>
                <h2>The Process</h2>
              </div>
              <p>
                Once I have reviewed and approved your response to the form, I
                will reach out to confirm the details of your piece, and respond
                to any inquiries you may have had. At this point, I will confirm
                any reference material and give you a final quote. Once the
                quote is confirmed, I will ask for a 40% non-refundable deposit.
                I will then continue to update you as I progress through your
                piece.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-step">
            <div className="step-content">
              <div className="step-header">
                <span className="step-number">3</span>
                <h2>Completed Work</h2>
              </div>
              <p>
                Once completed I will send an image of the completed piece,
                where you will have up to three changes that can be requested.
                Once the balance of the payment is received, I will send the
                completed piece.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section">
          <h2>Pricing</h2>
          <p className="pricing-note">
            The pricing of wildlife commissions varies greatly depending on size
            and medium. Please reach out with your desired commission details
            via the order request form, and I will send you a quote shortly!
          </p>
        </div>

        {/* CTA */}
        <div className="commission-cta">
          <a
            href="https://forms.gle/kJCmQMLiw3nHXypJ6"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Request a Commission <ExternalLink size={13} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default WildlifeCommissions;
