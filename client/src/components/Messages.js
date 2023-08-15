import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
const axios = require("axios");

function Messages({ email, name }) {
  const [show, setShow] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const [userMessage, setUserMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSend = async () => {
    setShow(false);
    const sitterEmail = user.email;
    const sitterName = user.name;
    const newMessage = { userMessage, email, name, sitterEmail, sitterName };
    console.log(newMessage);
    // I want to call newChat function in my helpers in the backend with the above parameters

    // axios.post('http://localhost:8080/bookings/send', newMessage)
    //   .then(response => console.log(response))
    //   console.log("Email sent succefully!")
    //   .catch(error => {
    //   console.error('Error sending email!', error);
    //   })

    try {
      const response = await fetch("http://localhost:8080/bookings/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      // const responseData = response;
      // console.log("Server response:", response.statusCode);
      alert("Email sent!");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faComment} /> Message Owner
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send a message to {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isAuthenticated && (
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Owner's Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Sitter's Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={user.email}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Messages;
