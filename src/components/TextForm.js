import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text');

    const handdleUPclick = () => {
        console.log("Upper Case Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handdleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    };

    return (
        <div>
            <div className="my-3">
                <h4 htmlFor="myBox" className="form-label">{props.heading}</h4>
                <textarea className="form-control" value={text} onChange={handdleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handdleUPclick}>Convert To UPPERCASE</button>
        </div>
    )
}
