import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="page-container">
        <main>
          <h3>Page not found</h3>
          <p>
            We couldn't find the page you were looking for. This is either
            because: There is an error in the URL entered into your web browser.
            Please check the URL and try again. The page you are looking for has
            been moved or deleted. You can return to our homepage by&nbsp;
            <Link to="/">clicking here</Link>.
          </p>
        </main>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
