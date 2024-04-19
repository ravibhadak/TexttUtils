import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase : " + text)
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handlelpClick = () => {
    let lptext = text.toLowerCase();
    setText(lptext);
  };

  const handleonchange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
        <div className="container my-3 border border-dark rounded">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="myBox"
            rows="10"
          ></textarea>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handlelpClick}>
            Convert to Lowercase
          </button>
        </div>
        <div className="container my-2 border border-primary">
            <h1 className="text-center border-bottom border-primary">Your text summary</h1>
            <p className="border-bottom">{text.split(" ").length} words and {text.length} characters</p>
            <p className="border-bottom">{0.008 * text.split(" ").length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  );
}
