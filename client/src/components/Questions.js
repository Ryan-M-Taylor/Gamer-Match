import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
// import {Signup} from './components/Signup';

const Questions = (props) => {
  // const [question, setQuestions] = useState({});

  const [selectedOption, setSelectedOption] = useState('');

  const { answer } = item;

  // const handleChange = e => {
  //   e.persist();
  //   console.log(e.target.value);

  //   setItem(prevState => ({
  //     ...prevState,
  //     kindOfStand: e.target.value
  //   }));
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   alert(`${kindOfStand}`);
  // };
  // const onClick = (ev) => {
  //   //TO-DO SEND/click value
  //   console.log("selectedOption", selectedOption);
  // };

  // function onValueChange(event) {
  //   setSelectedOption(event.target.value);
  // }

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

    setSelectedOption(prevState => ({
      ...prevState,
      answer: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${answer}`);
  };


  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {

  //   } catch (e) {

  //   }
  // }

  return (
    <div>
      <div>
        <h4 className="greeting">Hey newUser123, let other users get to know you!</h4>
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
              <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
                Submit
              </Button>
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
                <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
                  Submit
                </Button>
              </div>
            ))}
          </Form>
        </div>
      </div>

      <div>
        <div>
          <h4>Do you to play solo or in teams?</h4>
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
                <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
                  Submit
                </Button>
              </div>
            ))}
          </Form>
        </div>
      </div>

      <div>
        <div>
          <h4>What genres do you like?</h4>
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
                <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
                  Submit
                </Button>
              </div>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
