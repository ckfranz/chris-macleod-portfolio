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

// const Contact = ({ data }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <Layout>
//       <div className="page-container">
//         <div>
//           {/* <h2>Contact</h2> */}
//           <p className="contact-text">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
//             obcaecati maiores laudantium neque quisquam placeat, beatae laborum,
//             nemo, non sequi deserunt enim iure praesentium reiciendis quas
//             reprehenderit blanditiis totam consectetur. Iure laudantium saepe
//             iste nostrum ratione eos nulla vel consectetur, fugit commodi natus,
//             consequatur deserunt delectus, eligendi vero. Totam, libero.
//           </p>

//           {/* <ToggleDropdown title="Commission Process">
//             <Commission />
//           </ToggleDropdown>
//           <ToggleDropdown title="Pricing">
//             <Pricing />
//           </ToggleDropdown> */}

//           <div className="contact-container">
//             <div className="contact-img-container">
//               {data.allCloudinaryMedia.nodes.map((media, index) => {
//                 // console.log(media + " : " + index);
//                 const image = getImage(media);
//                 return (
//                   <div key={index}>
//                     <GatsbyImage
//                       key={index}
//                       image={image}
//                       className="contact-img"
//                       alt="img-name"
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//             <form
//               name="contact"
//               data-netlify="true"
//               className="cta-form"
//               action="POST"
//               onSubmit={handleSubmit}
//             >
//               <div className="row">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   required
//                 />
//               </div>
//               <div className="row">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                 />
//               </div>
//               {/* <div className="col">
//               <input placeholder="Inquiry Type" required />
//             </div> */}
//               <div className="form-group">
//                 <textarea
//                   placeholder="Your Message"
//                   name="message"
//                   rows="10"
//                   className="message"
//                   required
//                 ></textarea>
//               </div>
//               {/* SPAM FILTERING */}
//               <div className="field">
//                 <div data-netlify-recaptcha="true"></div>
//               </div>
//               <button type="submit" className="send-button">
//                 Send Message
//               </button>
//             </form>
//             {showModal && <ModalSuccess onClose={closeModal} />}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };
