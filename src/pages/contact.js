import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Layout } from '../components';

const Contact = () => {
  return (
    <Layout>
      <div className="container max-w-4xl md:m-8 p-8 md:p-16 h-full mx-auto">
        <h1 className="w-full text-5xl text-blue-500 font-bold leading-tight text-gray-800">
          Get in touch.
        </h1>
        <h1 className="w-full mb-8 text-5xl text-blue-800 font-bold leading-tight text-gray-800">
          Connect with us today.
        </h1>
        <div className="pb-6 border-b-2 border-gray-300">
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
              <Form.Group controlId="formGroupCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="formGroupNumber">
                <Form.Label>Number</Form.Label>
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
        <div className="w-full pt-6">
          <p>Alternatively, you can mail us at </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
