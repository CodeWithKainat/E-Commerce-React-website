import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

// const handleclick = (event)=>{
//   Swal.fire({
//     title: 'Successfully SignedUp!',
    
//     icon: 'success',
//     confirmButtonText: 'done'
// })
// event.preventDefault();
// }

const handleclick = (event) => {
  event.preventDefault();

  const email = document.getElementById('formBasicEmail').value;
  const password = document.getElementById('formBasicPassword').value;

  const signupData = {
    email: email,
    password: password
  };

  console.log(signupData);

  Swal.fire({
    title: 'Successfully Signed Up!',
    icon: 'success',
    confirmButtonText: 'done'
  });
};

export default function Signup() {
  return (
    <div className='w-100  loginHeight '>
      <div className="row w-100 d-flex py-5 m-0 justify-content-center  ">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <h2 className='py-3'>SignUp</h2>
          <Form className='w-100'>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>


            <Button onClick={handleclick}  variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
