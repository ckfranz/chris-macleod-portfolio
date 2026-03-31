import React from "react";
import Layout from "../components/Layout";
import "./collaborations.css";

const Collaborations = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="collaborations">
          <h1 className="collaborations-title">Collaborations</h1>

          <section className="collab-section">
            <h2 className="collab-heading">Conservation Organizations</h2>
            <ul className="collab-list">
              <li>
                <span className="collab-project">Symbolic Adoptions</span>
                <span className="collab-partner">with Watersheds Canada</span>
              </li>
              <li>
                <span className="collab-project">Giving Tuesday Print Runs</span>
                <span className="collab-partner">with Pollinator Partnership Canada</span>
              </li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-heading">Scientific Illustrations</h2>
            <ul className="collab-list">
              <li>
                <a
                  href="https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3003413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="collab-project collab-link"
                >
                  Oxygen supersaturation has negligible effects on warming
                  tolerance across diverse aquatic ectotherms
                </a>
                <span className="collab-partner">with Dr. Graham Raby</span>
              </li>
              <li>
                <span className="collab-project">
                  Exploring Site-Specific Management of Plant Growth Regulator in
                  Wheat
                </span>
                <span className="collab-partner">with PhD student Caleb Neimeyer</span>
              </li>
            </ul>
          </section>

          <section className="collab-section">
            <h2 className="collab-heading">Books</h2>
            <ul className="collab-list">
              <li>
                <a
                  href="https://www.amazon.com/Sadie-Moose-Loose-Mignon-Morse/dp/B0F19GXFS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="collab-project collab-link"
                >
                  Sadie and Moose on the Loose
                </a>
                <span className="collab-partner">with Mignon Morse</span>
              </li>
              <li>
                <span className="collab-project">The Whale that Wasn't</span>
                <span className="collab-partner">with Stephen Saint</span>
              </li>
              <li>
                <span className="collab-project">Lelantus Protocol</span>
                <span className="collab-partner">with Stephen Saint</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Collaborations;
