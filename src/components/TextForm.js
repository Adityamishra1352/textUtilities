import React,{useState} from "react";

export default function TextForm(props) {
    const handleClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleLowerCase=(event)=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const [text,setText]=useState('Enter text here'); 
    // setText("hii i am aditya");
    return (
    <>
    <h1>
        {props.heading}
    </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1" value={text} onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleClick}>Convert to Upper Case</button>
        <button className="btn btn-primary my-2" onClick={handleLowerCase}>Convert to Lower Case</button>
      </div>
    </>
  );
}
