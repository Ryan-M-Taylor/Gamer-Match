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
        <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
          <div className="question-form">
            <h3>What is your favorite console?</h3>
          
            <label className="xbox">
              Xbox
              <input
                type="checkbox"
                name="question1"
                value="Xbox"
                checked={answer1.includes("Xbox")}
                onChange={handleCheckboxChange1}
              />
            </label>
            <label className="playstation">
              Playstation
              <input
                type="checkbox"
                name="question1"
                value="Playstation"
                checked={answer1.includes("Playstation")}
                onChange={handleCheckboxChange1}
              />
            </label>
            <label className="nintendo">
              Nintendo
              <input
                type="checkbox"
                name="question1"
                value="Nintendo"
                checked={answer1.includes("Nintendo")}
                onChange={handleCheckboxChange1}
              />
            </label>
            <label className="pc">
              PC
              <input
                type="checkbox"
                name="question1"
                value="PC"
                checked={answer1.includes("PC")}
                onChange={handleCheckboxChange1}
              />
            </label>
          </div>
          <div className="question-form">
            <h3>What are your favorite genres?</h3>
            <label className="text-primary">
              Shooter
              <input
                type="checkbox"
                name="question2"
                value="Shooter"
                checked={answer2.includes("Shooter")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label className="text-secondary">
              Sports
              <input
                type="checkbox"
                name="question2"
                value="Sports"
                checked={answer2.includes("Sports")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label className="text-success">
            Real-time strategy (RTS)
              <input
                type="checkbox"
                name="question2"
                value="Real-time strategy (RTS)"
                checked={answer2.includes("Real-time strategy (RTS)")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label className="text-danger">
            Multiplayer online battle arena (MOBA)
              <input
                type="checkbox"
                name="question2"
                value="Multiplayer online battle arena (MOBA)"
                checked={answer2.includes("Multiplayer online battle arena (MOBA)")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label className="text-warning">
              RPG
              <input
                type="checkbox"
                name="question2"
                value="RPG"
                checked={answer2.includes("RPG")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label className="text-info">
              Puzzle
              <input
                type="checkbox"
                name="question2"
                value="Puzzle"
                checked={answer2.includes("Puzzle")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label className="text-light">
            Action-adventure
              <input
                type="checkbox"
                name="question2"
                value="Action-adventure"
                checked={answer2.includes("Action-adventure")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label className="text-primary">
            Survival 
              <input
                type="checkbox"
                name="question2"
                value="Survival"
                checked={answer2.includes("Survival")}
                onChange={handleCheckboxChange2}
              />
            </label>
            <label className="text-secondary">
            Platformer 
              <input
                type="checkbox"
                name="question2"
                value="Platformer"
                checked={answer2.includes("Platformer")}
                onChange={handleCheckboxChange2}
              />
            </label>


          </div>
          <div className="question-form">
            <h3>Do you play casually or competitively?</h3>
            <label className="login">
              Casual
              <input
                type="checkbox"
                name="question3"
                value="Option 1"
                checked={answer3 === "Option 1"}
                onChange={handleCheckboxChange3}
              />
            </label>
            <label className="signup">
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
          <div className="question-form">
            <h3>Do you like playing Co-Op?</h3>
            <label className="login">
              Solo
              <input
                type="checkbox"
                name="question4"
                value="Option 1"
                checked={answer4 === "Option 1"}
                onChange={handleCheckboxChange4}
              />
            </label>
            <label className="signup">
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
          <button type="submit" className="btn login-btn friend-btn my-1">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CheckboxList;
