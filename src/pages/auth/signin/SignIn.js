import React from 'react';
import Form from 'react-bootstrap/Form';
import logo from '../../../assets/icons/logo.png';
import Button from 'react-bootstrap/Button';

const SignIn = () => {
  return (
    <>
      <div className='container'>
        <section className='d-flex'>
          <div
            className='left_data'
            style={{
              flex: "0 0 60%",
              display: "flex",
              justifyContent: "flex-start",
              position: "relative",
              marginLeft: "-80px",
            }}
          >
            <img
              src="./sign_img.png"
              alt=""
              style={{
                height: "100vh",
                width: "auto",
                maxWidth: "100%",
              }}
            />
          </div>
          <div
            className="right_data"
            style={{
              flex: "0 0 60%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "18vh",
            }}
          >
            <img
              src={logo}
              style={{ width: "15%" }}
              className="signup-logo"
              alt="logo"
            />
            <h3 className='text-start mt-4 col-lg-6'
              style={{
                fontFamily: 'Arial',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '36px',
              }}
            >
              Welcome, Admin BCR!
            </h3>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name='email'
                  placeholder="Contoh: johndee@gmail.com"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name='password'
                  placeholder="6+ karakter"
                />
              </Form.Group>

              <Button
                variant="primary"
                className='col-lg-8 mt-3'
                style={{
                  background: "#0D28A6",
                  borderRadius: "2px",
                  fontFamily: 'Arial',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FFFFFF',
                }}
                type="submit"
              >
                Sign In
              </Button>
            </Form>
          </div>
        </section>
      </div>
    </>
  );
}

export default SignIn;
