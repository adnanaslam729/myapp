import React, { useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
      // console.log("UpperCase was Clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Convert to UpperCase!", "success");
    };
    const handleLowClick = () => {
      // console.log("LowerCase was Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Convert to LowerCase!", "success");
    };
    const handleClearClick = () => {
      // console.log("Clear text was Clicked" + text);
      let newText = ("");
      setText(newText);
      props.showAlert("Text has been Cleared", "success");
    };
    
    const handleOnChange = (event) => {
      // console.log("On Change");
      setText(event.target.value);
    };
  
    const [text, setText] = useState("");
  
    return (
      <>
        <div className="conatiner my-3" style={{color: props.mode === 'dark'? 'white' : '#322525'}}>
          <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea
              className="form-control my-3"
              value={text}
              onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : '#322525'}}
              id="myBox"
              rows="8"
            ></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
              Convert To UpperCase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>
              Convert To LowerCase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>
              Clear
            </button>
          
          </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : '#322525'}}>
          <h3>Your Text Summary</h3>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <p>{0.008 * text.split(" ").length} Minutes Read</p>
          <h3>Your Text Preview</h3>
          <p>{text.length > 0 ? text : 'Enter Text above in the text-box to Preview it here'}</p>
        </div>
      </>
    );
  }
