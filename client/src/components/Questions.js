import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
// import {Signup} from './components/Signup';

const Questions = (props) => {
  const [question, setQuestions] = useState({});

  return (
    <div>
      <div>
        <h1 className="greeting">Hey newUser123, let other users get to know you!</h1>
        <Form>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Xbox"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Playstation"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="PC"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Nintendo-Switch"
                name="group1"
                type={type}
                id={`inline-${type}-4`}
              />
            </div>
          ))}
        </Form>
      </div>

      <div>
        <div>
          <h2>Do you prefer to play competitive or just for fun?</h2>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Competitive"
                  name="group2"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Fun"
                  name="group2"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Both"
                  name="group2"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>

      <div>
        <div>
          <h1>Do you to play solo or in teams?</h1>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Solo"
                  name="group3"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Teams"
                  name="group3"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Both"
                  name="group3"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>

      <div>
        <div>
          <h1>What genres do you like?</h1>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Shooter"
                  name="group4"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Racing"
                  name="group4"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Puzzle"
                  name="group4"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="Fighting"
                  name="group4"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="Action adventure"
                  name="group4"
                  type={type}
                  id={`inline-${type}-3`}
                />{" "}
                <Form.Check
                  inline
                  label="Sports"
                  name="group4"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="Battle Royale"
                  name="group4"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="Simulation"
                  name="group4"
                  type={type}
                  id={`inline-${type}-3`}
                />
                <Form.Check
                  inline
                  label="MOBA"
                  name="group4"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
