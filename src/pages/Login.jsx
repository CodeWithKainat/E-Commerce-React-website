import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import { useRef } from 'react';


const handleClick = (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const username = document.getElementById('username').value;

  localStorage.setItem('emailData', email);
  localStorage.setItem('passwordData', password);
  localStorage.setItem('usernameData', username);

  Swal.fire({
    title: 'Successfully logged in!',
    icon: 'success',
    confirmButtonText: 'Done'
  });
};

export default function Login() {
  return (
    <div className=' container-fluid loginHeight'>
      <div className="row w-100 py-2 m-0 d-flex justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <h2 className='py-3'>Login</h2>
          <Form className='w-100'>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" id="username" placeholder="Enter username" />
              <Form.Text className="text-muted">
                We'll never share your username with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" id="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={handleClick} variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
