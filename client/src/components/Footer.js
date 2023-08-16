import React from 'react';
import '../css/home.css'; // Import your custom CSS for additional styling

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer mt-auto py-3 bg-light fixed-bottom">
      <div className="container">
        <p className="text-muted text-center">
          &copy; {currentYear} Paws Perfect. All Rights Reserved.
         
        </p>
      </div>
    </footer>
  );
}

export default Footer;
