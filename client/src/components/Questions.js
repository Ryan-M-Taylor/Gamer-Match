import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { UPDATE_PREFERENCES } from "../utils/mutations";

const CheckboxList = () => {
  const [answer1, setAnswer1] = useState([]);
  const [answer2, setAnswer2] = useState([]);
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [updatePreferences] = useMutation(UPDATE_PREFERENCES);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (answer1 && answer2 && answer3 && answer4) {
      try {
        await updatePreferences({
          variables: {
            favoriteConsole: answer1,
            genres: answer2,
            competitive: answer3 === "Option 1",
            coOp: answer4 === "Option 1",
          },
        });
        console.log("Preferences updated successfully!");
        setAnswer1([]);
        setAnswer2([]);
        setAnswer3("");
        setAnswer4("");

        setFormSubmitted(true);

        return <Navigate to="/me" />;
      } catch (error) {
        console.error("Error updating preferences:", error);
      }
    } else {
      alert("Please answer all questions.");
    }
  };

  return (
    <div>
      {formSubmitted ? (
        <div>
          <p>Form submitted! Redirecting to homepage...</p>
          <Navigate to="/me">Click here</Navigate>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <h3>What is your favorite console?</h3>
            <label>
              Xbox
              <input
                type="checkbox"
                name="question1"
                value="Option 1"
                checked={answer1.includes("Option 1")}
                onChange={handleCheckboxChange1}
              />
            </label>
            <label>
              Playstion
              <input
                type="checkbox"
                name="question1"
                value="Option 2"
                checked={answer1.includes("Option 2")}
                onChange={handleCheckboxChange1}
              />
            </label>
            <label>
              Nintendo
              <input
                type="checkbox"
                name="question1"
                value="Option 3"
                checked={answer1.includes("Option 3")}
                onChange={handleCheckboxChange1}
              />
            </label>
            <label>
              PC
              <input
                type="checkbox"
                name="question1"
                value="Option 4"
                checked={answer1.includes("Option 4")}
                onChange={handleCheckboxChange1}
              />
            </label>
          </div>
          <div>
            <h3>What are your favorite genres?</h3>
            <label>
              Option 1
              <input
                type="checkbox"
                name="question2"
                value="Option 1"
                checked={answer2.includes("Option 1")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label>
              Option 2
              <input
                type="checkbox"
                name="question2"
                value="Option 2"
                checked={answer2.includes("Option 2")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label>
              Option 3
              <input
                type="checkbox"
                name="question2"
                value="Option 3"
                checked={answer2.includes("Option 3")}
                onChange={handleCheckboxChange2}
              />
            </label>
          </div>
          <div>
            <h3>Do you play casually or competitively?</h3>
            <label>
              Casual
              <input
                type="checkbox"
                name="question3"
                value="Option 1"
                checked={answer3 === "Option 1"}
                onChange={handleCheckboxChange3}
              />
            </label>
            <label>
              Competitive
              <input
                type="checkbox"
                name="question3"
                value="Option 2"
                checked={answer3 === "Option 2"}
                onChange={handleCheckboxChange3}
              />
            </label>
          </div>
          <div>
            <h3>Do you like playing Co-Op?</h3>
            <label>
              Solo
              <input
                type="checkbox"
                name="question4"
                value="Option 1"
                checked={answer4 === "Option 1"}
                onChange={handleCheckboxChange4}
              />
            </label>
            <label>
              Co-Op
              <input
                type="checkbox"
                name="question4"
                value="Option 2"
                checked={answer4 === "Option 2"}
                onChange={handleCheckboxChange4}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CheckboxList;
