import { useState } from 'react';
import './form.css'




const Form = () => {
    const [userName, setUserName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [gender, setGender] = useState('');
    const [days, setDays] = useState('');
  
  function handleClick(e) {
    const value = e.target.value;

    setDays((prev) => {
      e.target.checked ? [...prev, value] : prev.filter((day) => day !== value);
    });

    return console.log(days);
  }

  return (
    <section>
      <div className="reach-out">
        <h2>Take A Coffee & Chat With Me</h2>
        <div className="contacts">
          <button>Test@gmail.com</button>
          <button>+123456789012</button>
        </div>
      </div>

      <form action="">
        <div className="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="90"
          rows="25"
          placeholder="your Message..."
          onChange={(e) => {
            setMessage(e.target.value);
            console.log(message);
          }}
        ></textarea>
        <h3>Select your Gender</h3>
        <div className="gender">
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              checked={gender === "female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="custom"
              value="custom"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="custom">Custom</label>
            <br />
            {gender === "custom" && (
              <textarea
                placeholder="please input gender..."
                onChange={(e) => {
                  setGender(e.target.value);
                  console.log(e.target.value);
                }}
              ></textarea>
            )}
          </div>
        </div>
        <h3>Select Day(s)</h3>
        <div className="days">
          <div>
            <input
              type="checkbox"
              name="days"
              id="Mon"
              onChange={handleClick}
            />
            <label htmlFor="mon">MON</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="days"
              id="Tue"
              onChange={handleClick}
            />
            <label htmlFor="tue">TUE</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="days"
              id="wed"
              onChange={handleClick}
            />
            <label htmlFor="wed">WED</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="days"
              id="thurs"
              onChange={handleClick}
            />
            <label htmlFor="thurs">Thurs</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="days"
              id="fri"
              onChange={handleClick}
            />
            <label htmlFor="fri">FRI</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="days"
              id="sat"
              onChange={handleClick}
            />
            <label htmlFor="sat">SAT</label>
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Form