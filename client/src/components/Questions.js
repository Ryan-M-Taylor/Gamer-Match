import React, { useState } from 'react';

const Questions = () => {
  const [selectedCheckboxes1, setSelectedCheckboxes1] = useState([]);
  const [selectedCheckboxes2, setSelectedCheckboxes2] = useState([]);
  const [selectedCheckbox3, setSelectedCheckbox3] = useState('');

  const handleCheckboxChange1 = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes1([...selectedCheckboxes1, checkboxValue]);
    } else {
      setSelectedCheckboxes1(selectedCheckboxes1.filter((value) => value !== checkboxValue));
    }
  };

  const handleCheckboxChange2 = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes2([...selectedCheckboxes2, checkboxValue]);
    } else {
      setSelectedCheckboxes2(selectedCheckboxes2.filter((value) => value !== checkboxValue));
    }
  };

  const handleRadioChange3 = (event) => {
    setSelectedCheckbox3(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedCheckboxes1);
    console.log(selectedCheckboxes2);
    console.log(selectedCheckbox3);
    // submit the form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Question 1</h3>
        <label>
          <input type="checkbox" value="Option 1" onChange={handleCheckboxChange1} />
          Option 1
        </label>
        <label>
          <input type="checkbox" value="Option 2" onChange={handleCheckboxChange1} />
          Option 2
        </label>
        <label>
          <input type="checkbox" value="Option 3" onChange={handleCheckboxChange1} />
          Option 3
        </label>
      </div>
      <div>
        <h3>Question 2</h3>
        <label>
          <input type="checkbox" value="Option 1" onChange={handleCheckboxChange2} />
          Option 1
        </label>
        <label>
          <input type="checkbox" value="Option 2" onChange={handleCheckboxChange2} />
          Option 2
        </label>
        <label>
          <input type="checkbox" value="Option 3" onChange={handleCheckboxChange2} />
          Option 3
        </label>
      </div>
      <div>
        <h3>Question 3</h3>
        <label>
          <input type="radio" name="question3" value="Option 1" checked={selectedCheckbox3 === 'Option 1'} onChange={handleRadioChange3} />
          Option 1
        </label>
        <label>
          <input type="radio" name="question3" value="Option 2" checked={selectedCheckbox3 === 'Option 2'} onChange={handleRadioChange3} />
          Option 2
        </label>
      </div>
      <div>Selected checkboxes for question 1: {selectedCheckboxes1.join(', ')}</div>
      <div>Selected checkboxes for question 2: {selectedCheckboxes2.join(', ')}</div>
      <div>Selected checkbox for question 3: {selectedCheckbox3}</div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Questions;
