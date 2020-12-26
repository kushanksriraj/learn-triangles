import React, { useState } from "react";
import "./styles.css";

var qList = ["questions", "calculator"];

export default function App() {
  const [selectQ, setSelectQ] = useState(qList[0]);

  const [lengths, setLengths] = useState([0, 0, 0]);
  const [thirdAngle, setThirdAngle] = useState(0);
  const [sidesArea, setSidesArea] = useState([0, 0, 0]);
  const [sidesHypo, setSidesHypo] = useState([0, 0]);

  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");
  const [result6, setResult6] = useState("");

  function checkTriangle(angles) {
    angles[0] = parseInt(angles[0]);
    angles[1] = parseInt(angles[1]);
    angles[2] = parseInt(angles[2]);

    if (angles[0] + angles[1] + angles[2] === 180) {
      setResult1("Yes, it's a triangle!");
    } else {
      setResult1("No, it's not a triangle!");
    }
  }

  function checkThirdNo(angle) {
    if (parseInt(angle) === 70) {
      setResult2("Yes, you are right!");
    } else {
      setResult2("No, you are wrong!");
    }
  }

  function threeAngles(val) {
    if (val === "obtuse") {
      setResult3("Yes, you are right!");
    } else {
      setResult3("No, you are wrong!");
    }
  }

  function threeSides(val) {
    if (val === "isosceles") {
      setResult4("Yes, you are right!");
    } else {
      setResult4("No, you are wrong!");
    }
  }

  function hypoCalc(sideLen) {
    var leg1 = parseInt(sideLen[0]);
    var leg2 = parseInt(sideLen[1]);

    var hypo = Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));

    setResult5("Hypotenuse : " + hypo.toFixed(2) + " units");
  }

  function areaCal(sideLen) {
    var s1 = parseInt(sideLen[0]);
    var s2 = parseInt(sideLen[1]);
    var s3 = parseInt(sideLen[2]);

    var s = (s1 + s2 + s3) / 2;
    var area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));

    if (isNaN(area)) {
      setResult6(
        "Oops! Can't make a triangle out of it. Try with different values."
      );
    } else {
      setResult6("Area : " + area.toFixed(2) + " units square");
    }
  }

  function returnQ(ques) {
    if (ques === "questions") {
      return (
        <div className="questions">
          <div className="question">
            <div className="question-label">
              Enter three angles of a traingle :
            </div>
            <input
              type="Number"
              onChange={() => {
                var len = event.target.value;
                lengths[0] = len;
                setLengths(lengths);
              }}
            />
            <input
              type="Number"
              onChange={() => {
                var len = event.target.value;
                lengths[1] = len;
                setLengths(lengths);
              }}
            />
            <input
              type="Number"
              onChange={() => {
                var len = event.target.value;
                lengths[2] = len;
                setLengths(lengths);
              }}
            />
            <button onClick={() => checkTriangle(lengths)}>
              Is this a Triangle?
            </button>
            <div className="result">{result1}</div>
          </div>

          <div className="question">
            <div className="question-label">
              The two angles of a triangle are :
            </div>
            <ol>
              <li>60 degrees</li>
              <li>50 degrees</li>
            </ol>
            <span className="question-prompt">Find out the third angle :</span>
            <input
              type="Number"
              onChange={() => setThirdAngle(event.target.value)}
            />
            <button onClick={() => checkThirdNo(thirdAngle)}>Check</button>
            <div className="result">{result2}</div>
          </div>

          <div className="question">
            <div className="question-label">
              The three angles of a triangle are :
            </div>
            <ol className="option-list">
              <li>40 degrees</li>
              <li>40 degrees</li>
              <li>100 degrees</li>
            </ol>
            <span className="question-prompt">Which triangle is this?</span>
            <select
              name="traingle"
              onChange={() => threeAngles(event.target.value)}
            >
              <option value="acute">Acute-angled triangle</option>
              <option value="obtuse">Obtuse-angled triangle</option>
            </select>
            <div className="result">{result3}</div>
          </div>

          <div className="question">
            <div className="question-label">
              The three sides of a triangle are :
            </div>
            <ol>
              <li>4 cm</li>
              <li>4 cm</li>
              <li>9 cm</li>
            </ol>
            <span className="question-prompt">Which triangle is this?</span>
            <select onChange={() => threeSides(event.target.value)}>
              <option value="scalen">Scalen</option>
              <option value="isosceles">Isosceles</option>
              <option value="equilateral">Equilateral</option>
            </select>
            <div className="result">{result4}</div>
          </div>
        </div>
      );
    } else if (ques === "calculator") {
      return (
        <div className="calculator">
          <div className="question">
            <div className="question-label">
              Enter the length of two legs of a right triangle :
            </div>
            <input
              type="Number"
              onChange={() => {
                sidesHypo[0] = event.target.value;
                setSidesHypo(sidesHypo);
              }}
            />
            <input
              type="Number"
              onChange={() => {
                sidesHypo[1] = event.target.value;
                setSidesHypo(sidesHypo);
              }}
            />
            <button onClick={() => hypoCalc(sidesHypo)}>Find hypotenuse</button>

            <div className="result">{result5}</div>
          </div>

          <div className="question">
            <div className="question-label">
              Enter the length of three sides of triangle :
            </div>
            <input
              type="Number"
              onChange={() => {
                sidesArea[0] = event.target.value;
                setSidesArea(sidesArea);
              }}
            />
            <input
              type="Number"
              onChange={() => {
                sidesArea[1] = event.target.value;
                setSidesArea(sidesArea);
              }}
            />
            <input
              type="Number"
              onChange={() => {
                sidesArea[2] = event.target.value;
                setSidesArea(sidesArea);
              }}
            />
            <button onClick={() => areaCal(sidesArea)}>Calculate area</button>

            <div className="result">{result6}</div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <header>
        <div className="title">Learn Triangles</div>
        <nav>
          <ul>
            {qList.map((item) => {
              return (
                <li key={item} onClick={() => setSelectQ(item)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main>{returnQ(selectQ)}</main>
    </div>
  );
}
