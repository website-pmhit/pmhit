import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="container mb-4 w-full text-5xl text-blue-500 font-bold leading-tight">
        <h1 className="text-blue-500">Get in touch.</h1>
        <h1 className="text-blue-800">Connect with us today.</h1>
      </div>
      <div className="container max-w-3xl md:max-w-full ">
        <div className="border-b-2 border-gray-300 pb-6">
          <Form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
              <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group controlId="formGroupNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formGroupCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <Form.Group controlId="formGroupMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="4" />
            </Form.Group>
            <Button className="bg-blue-500" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="w-full pt-4">
          <p>
            Alternatively, you can write to us at{' '}
            <a
              className="text-blue-400 hover:text-blue-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:website.pmhit@gmail.com?subject=Contact%20from%20pmhit.com&body=Hey%2C%20I'm%20XYZ%20and%20I%20wanted%20to%20ask%20about%20..."
            >
              website.pmhit@gmail.com
            </a>{' '}
            or use the chat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
