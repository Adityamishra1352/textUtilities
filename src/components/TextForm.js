import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerCase = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const capitalized=()=>{
    var arr = text.split(" ")
    var c = arr.length
    var temp = ""
    while(c!==0){
        temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
        c--;
    }

    setText(temp)
}
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleClearText = (event) => {
    setText("");
  };
  const [text, setText] = useState("");
  // setText("hii i am aditya");
  return (
    <>
      <div className="mb-3 container my-2">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLowerCase}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={capitalized}>
          Capitalize
        </button>
        <button className="btn btn-danger my-2 mx-1" onClick={handleClearText}>
          Clear text
        </button>
      </div>
      <div className="container my-2">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minuutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
