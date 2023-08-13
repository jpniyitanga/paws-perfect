import React from "react";
import Navbar from "./Navbar";
import ContactUsImage from "../images/contactus.jpg";
import Footer from "./Footer";


const Contact = () => {
  return (

    <div class="container-fluid bg-body text-light"
      style={{
        backgroundImage: `url(${ContactUsImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>

      <Navbar />
      <h3>Contact Us</h3>


      <p>Welcome to Paws Perfect, your trusted partner in pet care! We're here to ensure<br></br> that your furry friends receive the love and attention they deserve when you're away. <br></br>Whether you have questions, feedback, or need assistance, our dedicated support team<br></br> is ready to assist you. Here's how you can get in touch:
      </p>

      <h5>Contact Information:</h5>
      <ul>
        <li>Customer Support Email: support@pawsperfect.com</li>
        <li>Customer Support Phone: 1-800-PET-CARE (1-800-738-2273)</li>
        <li>Business Hours: Monday to Friday, 9:00 AM to 6:00 PM (EST)</li>
      </ul>


      <h5>Connect With Us:</h5>

      <p>Stay up-to-date with all things pet-related by following us on social media. We share helpful tips,<br></br> heartwarming pet stories, and updates about our services.</p>

      <div class="d-flex flex-column">
        <i class="bi bi-facebook"> @pawsperfect</i>
        <i class="bi bi-instagram"> @pawsperfect</i>
        <i class="bi bi-twitter"> @pawsperfect</i>
      </div>

      <br></br>


      <h5>Feedback and Suggestions:</h5>

      <p>We value your input and are constantly working to improve our services. If you have any feedback <br></br>or suggestions, please don't hesitate to share them with us at feedback@pawsperfect.com</p>

      <br></br>

      <Footer />
    </div>
  );
}
export default Contact;