import { useState } from "react";
import { Link } from "react-router-dom";

const CheckboxList = () => {
  const [answer1, setAnswer1] = useState([]);
  const [answer2, setAnswer2] = useState([]);
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCheckboxChange1 = (event) => {
    const option = event.target.value;
    if (event.target.checked) {
      setAnswer1([...answer1, option]);
    } else {
      setAnswer1(answer1.filter((item) => item !== option));
    }
  };

  const handleCheckboxChange2 = (event) => {
    const option = event.target.value;
    if (event.target.checked) {
      setAnswer2([...answer2, option]);
    } else {
      setAnswer2(answer2.filter((item) => item !== option));
    }
  };
  
  const handleCheckboxChange3 = (event) => {
    setAnswer3(event.target.value);
  };
  
  const handleCheckboxChange4 = (event) => {
    setAnswer4(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answer1 && answer2.length && answer3 && answer4) {
      console.log("Answer 1:", answer1);
      console.log("Answer 2:", answer2);
      console.log("Answer 3:", answer3);
      console.log("Answer 4:", answer4);
      setAnswer1([]);
      setAnswer2([]);
      setAnswer3("");
      setAnswer4("");
      setFormSubmitted(true);
    } else {
      alert("Please answer all questions.");
    }
  };

  if (formSubmitted) {
    return <Link to="/me" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>What are your favorite console?</h3>
        <label>
          Xbox
          <input type="checkbox" name="question1" value="Option 1" checked={answer1.includes("Option 1")} onChange={handleCheckboxChange1} />
        </label>
        <label>
          Playstion
          <input type="checkbox" name="question1" value="Option 2" checked={answer1.includes("Option 2")} onChange={handleCheckboxChange1} />
        </label>
        <label>
          Nintendo
          <input type="checkbox" name="question1" value="Option 3" checked={answer1.includes("Option 3")} onChange={handleCheckboxChange1} />
        </label>
        <label>
          PC
          <input type="checkbox" name="question1" value="Option 4" checked={answer1.includes("Option 4")} onChange={handleCheckboxChange1} />
        </label>
      </div>
      <div>
        <h3>What are your favorite game genres? </h3>
        <label>
          Sports
          <input type="checkbox" name="question2" value="Option 1" checked={answer2.includes("Option 1")} onChange={handleCheckboxChange2} />
        </label>
        <label>
          Shooter
          <input type="checkbox" name="question2" value="Option 2" checked={answer2.includes("Option 2")} onChange={handleCheckboxChange2} />
        </label>
        <label>
          RPG
          <input type="checkbox" name="question2" value="Option 3" checked={answer2.includes("Option 3")} onChange={handleCheckboxChange2} />
        </label>
      </div>
      <div>
        <h3>Do you enjoy Co-Op or Solo?</h3>
        <label>
          Co-Op
          <input type="checkbox" name="question3" value="Option 1" checked={answer3 === "Option 1"} onChange={handleCheckboxChange3} />
        </label>
        <label>
          Solo
          <input type="checkbox" name="question3" value="Option 2" checked={answer3 === "Option 2"} onChange={handleCheckboxChange3} />
        </label>
      </div>
      <div>
        <h3>Do you play competitively or casually?</h3>
        <label>
          Competitive
          <input type="checkbox" name="question4" value="Option 1" checked={answer4 === "Option 1"} onChange={handleCheckboxChange4} />
        </label>
        <label>
          Casual
          <input type="checkbox" name="question4" value="Option 2" checked={answer4 === "Option 2"} onChange={handleCheckboxChange4} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxList;
