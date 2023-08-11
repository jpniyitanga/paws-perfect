import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RegisterSitterImage from "../images/registersitter.jpeg";


const FormSitters = () => {

  return (
    <div class="container-fluid bg-body">
      <Navbar />

      <div class="d-flex flex-row justify-content-evenly">
        <div>
          <img src={RegisterSitterImage} alt="Register Sitter Image" style={{ width: '600px', height: '450px' }} />
        </div>

        <div>
          <div class="bd-example" style={{width: '600px'}}>
            <form>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="John" />
                <label for="floatingInput">First Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Doe" />
                <label for="floatingInput">Last Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="A1A 1B1" />
                <label for="floatingInput">Postal Code</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>
            </form>
          </div>
        </div>
      </div>



      <Footer />
    </div>

  );
}
export default FormSitters;